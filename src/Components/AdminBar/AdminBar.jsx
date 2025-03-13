import { BiSolidCategory } from "react-icons/bi";
import {
  FaHome,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdPayments } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";

const AdminBar = () => {
  const { logOut } = useAuth();
  return (
    <div className="list-none pt-6">
      <li className="mb-4 px-4">
        <NavLink
          to="/dashboard/adminHome"
          className={({ isActive }) =>
            isActive
              ? "text-[#333333] bg-[#c7c7c9] font-semibold flex items-center gap-2 text-lg p-2 rounded-lg"
              : "text-black bg-transparent flex items-center gap-2 text-lg font-semibold p-2 rounded-lg"
          }
        >
          {" "}
          <IoMdHome className="text-2xl"></IoMdHome>
          Admin Home
        </NavLink>
      </li>

      <li className="mb-4 px-4">
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive }) =>
            isActive
              ? "text-[#333333] bg-[#c7c7c9] font-semibold flex items-center gap-2 text-lg p-2 rounded-lg"
              : "text-black bg-transparent flex items-center gap-2 text-lg font-semibold p-2 rounded-lg"
          }
        >
          {" "}
          <FaUsers></FaUsers>
          Manage Users
        </NavLink>
      </li>

      <li className="mb-4 px-4">
        <NavLink
          to="/dashboard/manageCategory"
          className={({ isActive }) =>
            isActive
              ? "text-[#333333] bg-[#c7c7c9] font-semibold flex items-center gap-2 text-lg p-2 rounded-lg"
              : "text-black bg-transparent flex items-center gap-2 text-lg font-semibold p-2 rounded-lg"
          }
        >
          {" "}
          <BiSolidCategory></BiSolidCategory>
          Category
        </NavLink>
      </li>

      <li className="mb-4 px-4">
        <NavLink
          to="/dashboard/paymentManage"
          className={({ isActive }) =>
            isActive
              ? "text-[#333333] bg-[#c7c7c9] font-semibold flex items-center gap-2 text-lg p-2 rounded-lg"
              : "text-black bg-transparent flex items-center gap-2 text-lg font-semibold p-2 rounded-lg"
          }
        >
          {" "}
          <MdPayments></MdPayments>
          Payment
        </NavLink>
      </li>

      <li className="mb-4 px-4">
        <NavLink
          to="/dashboard/manageBanner"
          className={({ isActive }) =>
            isActive
              ? "text-[#333333] bg-[#c7c7c9] font-semibold flex items-center gap-2 text-lg p-2 rounded-lg"
              : "text-black bg-transparent flex items-center gap-2 text-lg font-semibold p-2 rounded-lg"
          }
        >
          {" "}
          <RiAdvertisementFill></RiAdvertisementFill>
          Manage Banner
        </NavLink>
      </li>

      <li className="mb-4 px-4">
        <NavLink
          to="/dashboard/salesReport"
          className={({ isActive }) =>
            isActive
              ? "text-[#333333] bg-[#c7c7c9] font-semibold flex items-center gap-2 text-lg p-2 rounded-lg"
              : "text-black bg-transparent flex items-center gap-2 text-lg font-semibold p-2 rounded-lg"
          }
        >
          {" "}
          <TbReportMoney></TbReportMoney>
         Sales Report
        </NavLink>
      </li>

      <div className="divider w-[90%] mx-auto"></div>

      <div className="list-none pl-4 flex flex-col">
        <li className="mb-4">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            {" "}
            <FaHome className="text-2xl"></FaHome>
            Home
          </NavLink>
        </li>

        <li className="mb-4">
          <NavLink
            to="/profile"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            {" "}
            <FaUserCircle className="text-2xl"></FaUserCircle>
            Profile
          </NavLink>
        </li>

        <li onClick={logOut} className="mb-4">
          <NavLink
            to="/login"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            {" "}
            <LuLogOut className="text-2xl"></LuLogOut>
            Logout
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default AdminBar;
