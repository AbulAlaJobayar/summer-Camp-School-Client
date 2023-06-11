import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-24 pb-16">
        <Outlet></Outlet>
        </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Main;
