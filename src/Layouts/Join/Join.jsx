import { Send } from "lucide-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import { toast } from "react-toastify";
const Join = () => {
  const [email, setEmail] = useState("");
  const axiosSecure = useAxiosSecure();
  const handleSubscription = async (e) => {
    e.preventDefault();
    const { data } = await axiosSecure.post("/subscribe", { email });
    if (data.message) {
      toast.success("Subscription Successful 🎊");
    }
    setEmail("");
    console.log(data);
  };
  return (
    <div className="mb-12 mt-8">
      <div className="bg-joinBg lg:h-[300px] h-[350px] bg-no-repeat bg-cover bg-center w-11/12 mx-auto rounded-xl relative z-20">
        <div className="absolute w-full h-full bg-[#22293466] rounded-xl"></div>
        <div className="w-3/5 mx-auto flex flex-col items-center justify-center absolute top-1/4 left-[20%] z-10">
          <h2 className="lg:text-3xl text-xl font-bold uppercase text-white ">
            get <span className="text-orange-400">20%</span>off discount in
            coupon
          </h2>
          <p className="lg:text-2xl text-lg font-light text-white">
            by subscribe out newsletter
          </p>
          <form onSubmit={handleSubscription}>
            <div className="flex lg:flex-row flex-col items-center bg-white shadow-md lg:rounded-full rounded-sm p-2 lg:w-[28rem] w-full mx-auto mt-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Your Email Address"
                className="flex-1 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none bg-transparent"
              />
              <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-full transition">
                Subscribe
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
