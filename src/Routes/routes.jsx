import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Services from "../Pages/Services/Sevices"
import OrderFood from "../Pages/OrderFood/OrderFood";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/ourMenu",
            element:<OurMenu></OurMenu>
        },
        {
            path:"/services",
            element:<Services></Services>
        },{
            path:"/orderFood",
            element:<OrderFood></OrderFood>
        }
    ]
  },
]);

