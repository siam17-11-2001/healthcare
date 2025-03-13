import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast, Zoom } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import useCategory from "../../Hooks/useCategory";

const UpdateModal = () => {
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useCategory();
  const navigate = useNavigate();
  const { name, image, quantity, _id } = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const quantity = parseInt(form.quantity.value);
    const updatedInfo = { name, image, quantity };
    axiosSecure.put(`/category/${_id}`, updatedInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast("🔄 Cart Added Successfully", {
          position: "top-right",
          autoClose: 700,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        refetch();
        navigate("/dashboard/manageCategory");
      }
    });
  };
  return (
    <div>
      <Title title="Update Your Category"></Title>
      <form className="card-body" onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#333333]">
              Edit Category Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Your Category"
            className="input input-bordered rounded-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#333333]">
              Edit Category Image URL
            </span>
          </label>
          <input
            type="url"
            name="image"
            defaultValue={image}
            placeholder="Your Category Image"
            className="input input-bordered rounded-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#333333]">
              Edit Category Quantity
            </span>
          </label>
          <input
            type="num,ber"
            name="quantity"
            defaultValue={quantity}
            placeholder="Your Category Quantity"
            className="input input-bordered rounded-full"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300">
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateModal;
