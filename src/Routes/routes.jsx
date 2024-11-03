import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Services from "../Pages/Services/Sevices";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateROute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../AdminRoutes/AllUsers/AllUsers";
import AddFood from "../AddFood/AddFood";
import ManageFood from "../ManageFood/ManageFood";
import UpdateFood from "../UpdateFood/UpdateFood";
import Payment from "../Payment/Payment";
import PaymentHistory from "../PaymentHistory/PaymentHistory";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            {" "}
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/orderFood",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    // Users Route
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },{
        path:"paymentHistory",
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // Admin Routes

      {
        path: "addFood",
        element: <AddFood></AddFood>,
      },

      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manageFood",
        element: <ManageFood></ManageFood>,
      },
      {
        path: "updateFood/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
