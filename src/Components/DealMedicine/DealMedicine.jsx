import dealImage from "../../assets/deal-item.png";
import Countdown from "react-countdown";
const DealMedicine = () => {
  const currentDate = new Date();
  const oneMonthLater = new Date(
    currentDate.setMonth(currentDate.getMonth() + 1)
  );
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex items-center gap-4 mt-10">
        {/* Days */}
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-white shadow-md rounded-md border">
          <span className="text-4xl font-bold text-gray-900">{days}</span>
          <span className="text-sm text-gray-500">DAYS</span>
          <div className="w-full h-1 bg-yellow-400 mt-2"></div>
        </div>
        {/* Hours */}
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-white shadow-md rounded-md border">
          <span className="text-4xl font-bold text-gray-900">{hours}</span>
          <span className="text-sm text-gray-500">HOURS</span>
          <div className="w-full h-1 bg-red-400 mt-2"></div>
        </div>
        {/* Minutes */}
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-white shadow-md rounded-md border">
          <span className="text-4xl font-bold text-gray-900">{minutes}</span>
          <span className="text-sm text-gray-500">MINUTES</span>
          <div className="w-full h-1 bg-blue-400 mt-2"></div>
        </div>
        {/* Seconds */}
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-white shadow-md rounded-md border">
          <span className="text-4xl font-bold text-gray-900">{seconds}</span>
          <span className="text-sm text-gray-500">SECONDS</span>
          <div className="w-full h-1 bg-pink-400 mt-2"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-11/12 bg-base-100 mx-auto my-6 px-8 bg-dealBg bg-center bg-no-repeat bg-cover lg:h-[500px] h-auto flex lg:flex-row flex-col justify-center gap-3 items-center">
      <div className="lg:w-1/2 w-full lg:pl-8 pl-0 lg:py-0 py-6 space-y-3">
        <h3 className="text-3xl font-semibold text-[#333333] capitalize">
          deal of this week
        </h3>
        <p className="text-lg text-gray-500 capitalize">
          get the premium version
        </p>
        <h4 className="text-4xl font-semibold capitalize">
          <span className="text-[#4E97FD]">covid 19</span> vaccine
        </h4>
        <p className="text-xl text-[#e4573d] font-semibold">$210.99</p>
        <button className="px-5 py-2 text-lg font-bold rounded-full text-white bg-[#4E97FD]">
          Buy Now
        </button>
        <div>
          <h2>
            <Countdown date={oneMonthLater} renderer={renderer} />
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:pb-0 pb-4">
        <img className="w-[400px]" src={dealImage} alt="" />
      </div>
    </div>
  );
};

export default DealMedicine;
