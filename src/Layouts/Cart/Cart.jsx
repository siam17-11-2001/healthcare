import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import CartItem from "../../Components/CartItem/CartItem";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);
  const [quantityPrice, setQuantityPrice] = useState(totalPrice);
  return (
    <div>
      <Helmet>
        <title>Health Care | Cart</title>
      </Helmet>
      <div className="bg-loginBanner bg-blend-darken bg-[#00000081] lg:h-[300px] h-[100px] bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="lg:text-5xl text-2xl font-semibold text-[#ffffffe1] space-x-4">
          <Link
            to="/"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link
            to="/cart"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Cart
          </Link>
        </div>
      </div>
      {cart.length === 0 ? (
        <h2 className="text-2xl font-bold text-center py-12 text-[#333333]">No Item Added to the Cart </h2>
      ) : (
        <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-4 gap-12 w-11/12 mx-auto my-6 px-4 py-4">
          <div className="lg:w-3/4 w-full mx-auto flex flex-col justify-center gap-8">
            {cart.map((item) => (
              <CartItem
                item={item}
                key={item._id}
                quantityPrice={quantityPrice}
                setQuantityPrice={setQuantityPrice}
              ></CartItem>
            ))}
          </div>

          <div className="lg:w-1/4 w-full mx-auto bg-[#F8F8F8] py-12 px-6">
            <h4 className="text-xl font-bold">Cart Total</h4>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <h2 className="font-bold">SubTotal : </h2>
              <p className="font-semibold">$ {quantityPrice}</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <h2 className="font-bold">Total : </h2>
              <p className="font-semibold">
                {<p className="font-semibold">$ {quantityPrice}</p>}
              </p>
            </div>
            {cart.length ? (
              <Link to="/payment">
                <div className="mt-4">
                  <button className="py-2 px-4 rounded-lg text-lg font-bold uppercase bg-[#4E97FD] text-[#fff] w-full">
                    Pay
                  </button>
                </div>
              </Link>
            ) : (
              <div className="mt-4">
                <button
                  disabled
                  className="py-2 px-4 rounded-lg text-lg font-bold uppercase bg-[#4E97FD] text-[#fff] w-full"
                >
                  Pay
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
