import Lottie from "lottie-react";
import errorAnimation from "./error.json";
import { NavLink, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  {
    if (error.status === 404) {
      return (
        <div className="w-full h-screen mx-auto flex justify-center items-center  rounded-xl">
          <div className="text-center space-y-3">
            <Lottie className="w-[250px] mx-auto" animationData={errorAnimation} loop={true} />
            <h4 className="text-5xl font-semibold">
              This page doesn't exist...
            </h4>
            <p className="text-lg ">
              The page you're looking is not existed!!!
            </p>
            <p className="text-lg ">
              Try to going previous page for more information
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-slate-400 hover:transition-colors hover:duration-300">
              <NavLink to="/">Go Back To Home</NavLink>
            </button>
          </div>
        </div>
      );
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }
};

export default Error;
