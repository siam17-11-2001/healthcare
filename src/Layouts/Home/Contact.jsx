import Title from "../../Components/Title/Title";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-12 w-11/12 mx-auto">
      <Title title="Contact us"></Title>
      <section className="flex lg:flex-row flex-col justify-between gap-8">
        <div className="lg:w-1/2 w-full space-y-4 pr-4 lg:border-r-2 dark:border-black">
          <h4 className="text-3xl font-semibold">Our Main Office</h4>
          <p className="font-semibold text-justify">
            Have questions about our medical equipment or need assistance with
            your order? We're here to help! Whether you're looking for
            high-quality healthcare products, need expert advice, or have a
            special request, feel free to reach out. Our team is dedicated to
            providing reliable support and ensuring you get the best medical
            solutions for your needs. Contact us via phone, email, or visit our
            store—we look forward to assisting you!
          </p>
          <div className="flex items-center gap-3">
            <div>
              <TfiHeadphoneAlt className="text-[#4e97fd] text-5xl"></TfiHeadphoneAlt>
            </div>
            <div>
              <p className="font-semibold">Hotline Free 24/7</p>
              <p className="font-semibold">+8801569118531</p>
            </div>
          </div>
          <div className="font-semibold">
            <p>
              Address: <span>Subid Bazar, Sylhet</span>
            </p>
            <p>
              Email: <span>ahbabtahmim@gmail.com</span>
            </p>
            <p>
              Phone: <span>+8801569118531</span>
            </p>
            <p>
              Fax:
              <span>(+100) 123 456 7890 – (+100) 123 456 7891</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">Social Share: </p>
            <div className="flex items-center gap-3">
              <span className="border-2 border-black p-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                <FaTwitter></FaTwitter>
              </span>
              <span className="border-2 border-black p-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                <FaFacebook></FaFacebook>
              </span>
              <span className="border-2 border-black p-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                <FaLinkedin></FaLinkedin>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <h4 className="text-3xl font-semibold">Drop a message</h4>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-semibold">Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input bg-base-200 focus:outline-none"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-semibold">Email</span>
            </div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input bg-base-200 focus:outline-none"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-semibold">
                Your Message
              </span>
            </div>
            <textarea
              className="input bg-base-200 focus:outline-none h-[120px] resize-none p-4"
              placeholder="Enter Your Message"
            ></textarea>
          </label>
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 bg-[#4e97fd] text-white font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
