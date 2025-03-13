import Title from "../../Components/Title/Title";

const TopBrands = () => {
  return (
    <div>
      <Title title="our top brands"></Title>
      <div className="dark:bg-[#F2F3F5] py-10 px-4 mt-6">
        <div className="grid lg:grid-cols-4 grid-cols-1 items-center gap-4 w-11/12 mx-auto">
          <div className=" lg:w-[200px] w-[100%] bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2020/12/hospital_1.svg"
              alt=""
            />
          </div>
          <div className=" lg:w-[200px] w-[100%] bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/Home10_brand1-1.svg"
              alt=""
            />
          </div>
          <div className=" lg:w-[200px] w-[100%] bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/Home10_brand2.svg"
              alt=""
            />
          </div>
          <div className=" lg:w-[200px] w-[100%] bg-white p-4 rounded-xl shadow-lg">
            <img
              className="w-[150px] bg-white p-4 rounded-xl"
              src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/Home10_brand3.svg"
              alt=""
            />
          </div>
          <div className=" lg:w-[200px] w-[100%] bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2020/12/drugstore.svg"
              alt=""
            />
          </div>
          <div className=" lg:w-[200px] w-[100%] bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/Home10_brand4.svg"
              alt=""
            />
          </div>
          <div className=" lg:w-[200px] w-[100%] bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/Home10_brand5.svg"
              alt=""
            />
          </div>
          <div className=" lg:w-[200px] w-[100%] bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/Home10_brand6.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
