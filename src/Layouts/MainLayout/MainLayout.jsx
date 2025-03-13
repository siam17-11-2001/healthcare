import { Outlet } from "react-router-dom";
import Navbar from "../../SharedFiles/Navbar/Navbar";
import Footer from "../../SharedFiles/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-246px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
