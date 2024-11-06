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
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../AdminRoutes/AllUsers/AllUsers";
import AddFood from "../AddFood/AddFood";
import ManageFood from "../ManageFood/ManageFood";
import UpdateFood from "../UpdateFood/UpdateFood";
import Payment from "../Payment/Payment";
import PaymentHistory from "../PaymentHistory/PaymentHistory";
import UserHome from "../UserHome/UserHome";
import AdminHome from "../AdminHome/AdminHome";
import BookTable from "../Pages/BookTable/BookTable";
import MyBooking from "../MyBooking/MyBooking";
import ManageBooking from "../ManageBooking/ManageBooking";
import AddReview from "../AddReview/AddReview";
import MenuItemDetails from "../MenuItemDetails/MenuItemDetails";
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
        path: "/bookTable",
        element: <BookTable></BookTable>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/menu/:id",
        element: <MenuItemDetails></MenuItemDetails>,
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/services",
        element: <Services></Services>,
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
      },
      {
        path: "addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "myBooking",
        element: <MyBooking></MyBooking>,
      },

      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
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
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageFood",
        element: <ManageFood></ManageFood>,
      },
      {
        path: "manageBooking",
        element: <ManageBooking></ManageBooking>,
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
