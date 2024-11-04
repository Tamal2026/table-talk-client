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
import UserHome from "../UserHome/UserHome";
import AdminHome from "../AdminHome/AdminHome";
import AdminRoute from "../AdminRoute/AdminRoute";
import BookTable from "../Pages/BookTable/BookTable";
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
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
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
        element: (
          <AdminRoute>
            <AddFood></AddFood>
          </AdminRoute>
        ),
      },

      {
        path: "allUsers",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manageFood",
        element: (
          <AdminRoute>
            <ManageFood></ManageFood>
          </AdminRoute>
        ),
      },
      {
        path: "updateFood/:id",
        element: (
          <AdminRoute>
            <UpdateFood></UpdateFood>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
