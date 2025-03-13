import { Outlet } from "react-router-dom";
import AdminBar from "../../Components/AdminBar/AdminBar";
import useRole from "../../Hooks/useRole";
import SellerBar from "../../Components/SellerBar/SellerBar";
import UserBar from "../../Components/UserBar/UserBar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [role, isLoading] = useRole();
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="flex">
        <div className="lg:w-[20%] w-[40%]  min-h-screen bg-[#F2F3F5] py-3">
          <h2 className="text-center w-11/12 mx-auto text-xl p-3 shadow-xl font-bold bg-[#a1c4f54e] rounded-lg">
            Health Care
          </h2>
          {role === "admin" && <AdminBar></AdminBar>}
          {role === "seller" && <SellerBar></SellerBar>}
          {role === "user" && <UserBar></UserBar>}
        </div>
        <div className="lg:w-[80%] w-[60%]  mx-auto p-4">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
