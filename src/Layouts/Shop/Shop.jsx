import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { useEffect, useState } from "react";
import dollar from "../../assets/dollars.png";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { toast, Zoom } from "react-toastify";
import Loading from "../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import "./shop.css";
import { CiSearch } from "react-icons/ci";
import { Helmet } from "react-helmet-async";
import ShopCard from "../../Components/ShopCard/ShopCard";

const Shop = () => {
  const [selectedData, setSelectedData] = useState(null);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [, refetch, isLoading] = useCart();
  const axiosSecure = useAxiosSecure();
  const [medicine, setMedicine] = useState([]);
  const [count, setCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  console.log(sort);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);


  useEffect(() => {
    const fetchData = async () => {
      let url = `/medicine?page=${currentPage}&size=${itemsPerPage}&sort=${sort}&search=${search}`;
      if (sort === "asc") url += "&sortAsc=true";
      if (sort === "desc") url += "&sortDsc=true";
      try {
        const { data } = await axiosPublic(url);
        setMedicine(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage, sort, search]);

  axiosPublic("/medicineCount").then((res) => {
    setCount(res.data.count);
    console.log(res.data.count);
  });

  const handleViewDetails = (item) => {
    setSelectedData(item);
    const modal = document.getElementById("my_modal");
    modal.showModal();
  };

  const handleAddToCart = (medicine) => {
    console.log(medicine);
    if (user && user?.email) {
      const cartItem = {
        cartId: medicine._id,
        email: user?.email,
        name: medicine.name,
        category: medicine.category_name,
        price: medicine.price,
        image: medicine.image,
      };

      axiosSecure.post("/addCart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast("🛒 Cart Added Successfully", {
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
        }
        refetch();
      });
    }
  };

  const handlePagination = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
    console.log(val);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <title>Health Care | Shop</title>
      </Helmet>
      <div className="bg-loginBanner bg-blend-darken bg-[#00000081] bg-no-repeat lg:h-[300px] h-[100px] bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="lg:text-5xl text-2xl font-semibold text-[#ffffffe1] space-x-4">
          <Link
            to="/"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link
            to="/shop"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Shop
          </Link>
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-6 flex lg:flex-row flex-col gap-4 justify-between">
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              onKeyUp={(e) => setSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search medicine"
            />
            <CiSearch></CiSearch>
          </label>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => setSort("asc")}
            className="btn bg-[#4e97fd] text-white font-bold"
          >
            Sort By Ascending
          </button>
          <button
            onClick={() => setSort("dsc")}
            className="btn bg-[#4e97fd] text-white font-bold"
          >
            Sort By Descending
          </button>
        </div>
      </div>
      <div className="w-11/12 mx-auto my-8">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
          {medicine.map((item) => (
            <ShopCard
              key={item._id}
              item={item}
              handleViewDetails={handleViewDetails}
              handleAddToCart={handleAddToCart}
            ></ShopCard>
          ))}
        </div>

        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
          {selectedData ? (
            <div className="modal-box">
              <img src={selectedData.image} alt="" />
              <h3 className="font-bold text-lg">{selectedData.name}</h3>
              <div className="py-2">
                <p className="font-bold py-1 lg:px-2 px-0 bg-[#EFEDF2] inline rounded-full l:text-lg text-sm text-[#4E97FD]">
                  {selectedData.category_name}
                </p>
              </div>
              <p className="py-2 text-gray-500">{selectedData.description}</p>
              <p className="py-2 text-xl font-semibold flex items-center">
                ${selectedData.price}.00
                <img className="w-6" src={dollar} alt="" />
              </p>

              <div className="modal-action ">
                <form method="dialog" className="w-full">
                  <button className="btn bg-[#4E97FD] font-bold text-white w-full">
                    Back
                  </button>
                </form>
              </div>
            </div>
          ) : (
            ""
          )}
        </dialog>
      </div>
      {medicine.length > 0 ? (
        <>
          <div className="pagination">
            <button className="btn btn-xs" onClick={handlePrev}>
              <GrFormPreviousLink></GrFormPreviousLink>
            </button>
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page ? "selected btn btn-xs" : "btn btn-xs"
                }
              >
                {page + 1}
              </button>
            ))}

            <button className="btn btn-xs" onClick={handleNext}>
              <GrFormNextLink></GrFormNextLink>
            </button>
            <select value={itemsPerPage} onChange={handlePagination}>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </>
      ) : (
        <h2 className="text-4xl font-bold h-[200px] text-center">
          No Item Found
        </h2>
      )}
    </div>
  );
};

export default Shop;
