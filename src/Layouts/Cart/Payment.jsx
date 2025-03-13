import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Health Care | Checkout</title>
      </Helmet>
      <div className="bg-loginBanner bg-blend-darken bg-[#00000081] lg:h-[300px] h-auto bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="text-5xl font-semibold text-[#ffffffe1] space-x-4">
          <Link
            to="/"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link
            to="/payment"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Payment
          </Link>
        </div>
      </div>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
