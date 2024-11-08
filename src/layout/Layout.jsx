import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";



const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>,
            <Outlet></Outlet>,
            <Footer></Footer>
        </div>
    );
};

export default Layout;