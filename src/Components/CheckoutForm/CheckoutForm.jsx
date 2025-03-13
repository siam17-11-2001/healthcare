import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import { toast, Zoom } from "react-toastify";
import useMedicine from "../../Hooks/useMedicine";
import { format } from "date-fns";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const [medicine] = useMedicine();
  const date = new Date();
  const formattedDate = format(date, "dd.MM.yyyy");
  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    const { paymentIntent, err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown User",
            email: user?.email || "Unknown User",
          },
        },
      }
    );

    if (err) {
      console.log("Payment Intent Error", err);
    } else {
      console.log("Payment Intent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        console.log("Transaction Id", paymentIntent.id);
        const payment = {
          transactionId: paymentIntent.id,
          email: user?.email,
          price: totalPrice,
          date: formattedDate,
          ids: cart.map((item) => item._id),
          cartIds: cart.map((item) => item.cartId),
          medicineName : cart.map(item => item.name),
          sellerInfo: medicine.map((item) => item.email),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        refetch();
        navigate("/invoice");
        console.log(res.data);
        if (res.data.paymentResult?.insertedId) {
          toast("💸 Payment Successful", {
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
      }
    }
  };
  const cardStyle = {
    style: {
      base: {
        fontSize: "18px",
        color: "#2D3748",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "500",
        backgroundColor: "#EDF2F7",
        border: "1px solid #CBD5E0",
        borderRadius: "8px",
        padding: "20px",
        letterSpacing: "0.5px",
        textAlign: "left",
        "::placeholder": {
          color: "#A0AEC0",
          fontStyle: "italic",
        },
        ":-webkit-autofill": {
          color: "#2D3748",
          backgroundColor: "#E2E8F0",
        },
      },
      invalid: {
        color: "#E53E3E",
        iconColor: "#E53E3E",
        backgroundColor: "#FFF5F5",
        borderColor: "#F56565",
      },
      complete: {
        color: "#38A169",
        iconColor: "#38A169",
        backgroundColor: "#F0FFF4",
        borderColor: "#C6F6D5",
      },
    },
  };

  return (
    <div className="w-3/4 mx-auto my-12">
      <form
        className="w-3/4 mx-auto p-6 bg-white shadow-xl rounded-lg"
        onSubmit={handleSubmit}
      >
        <CardElement options={cardStyle} />
        <button
          className="btn bg-[#4E97FD] text-white w-full font-bold mt-6"
          disabled={!stripe || !clientSecret}
        >
          Checkout
        </button>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};
export default CheckoutForm;
