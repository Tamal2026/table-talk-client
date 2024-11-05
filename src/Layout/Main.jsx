import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from '../Pages/Home/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const hideFooterRoutes = ["/login", "/signup"]; 
    const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

    return (
        <div>
            <Navbar />
            <Outlet />
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

export default Main;
