import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading/Loading";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, profileUpdate, setUser } = useAuth();
  const [role, isLoading] = useRole();
  let [isOpen, setIsOpen] = useState(false);
  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    profileUpdate({ displayName: name, photoURL: image })
    .then(
      setUser((prev) => {
        toast("User Info Updated Successfully")
        return { ...prev, displayName: name, photoURL: image };
      })
    )
    .catch((error)=>{
      console.log(error)
    })
    console.log(categoryInfo);
  };
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <section className="bg-loginBanner bg-blend-darken bg-[#00000081] lg:h-[300px] h-[100px] bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="lg:text-5xl text-2xl font-semibold text-[#ffffffe1] space-x-4">
          <Link
            to="/"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link
            to="/profile"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Profile
          </Link>
        </div>
      </section>

      <section className="lg:w-3/4 w-11/12 mx-auto border border-blue-500 rounded-xl my-12 pt-4 pb-12 dark:bg-base-100 shadow-xl text-center space-y-4">
        <div className="flex justify-center items-center relative">
          <img
            className="w-40 h-40 rounded-full border-8 border-white"
            src={user?.photoURL}
            alt=""
          />
          <p className="absolute -bottom-3 bg-[#4e97fd] p-2 rounded-md text-white font-bold">
            {role}
          </p>
        </div>
        <h2 className="font-bold">
          <span className="uppercase">User ID</span> : {user?.uid}
        </h2>
        <h2 className="font-bold">
          <span className="uppercase">User Name</span> : {user?.displayName}
        </h2>
        <h2 className="font-bold">
          <span className="uppercase">User Email</span> : {user?.email}
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#4e97fd] px-4 py-2 rounded-lg text-white font-bold"
        >
          Update profile
        </button>
      </section>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl max-h-fit rounded-xl bg-[#bdbdbf] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <form className="card-body" onSubmit={handleAddCategory}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#333333]">
                      Enter User Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#333333]">
                      Enter User Image URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    placeholder="Your Image"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300"
                  >
                    Update
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Profile;
