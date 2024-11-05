import { Link } from "react-router-dom";
import Cover from "../Pages/Shared/Cover/Cover";

import CheckOut from "../Payment/CheckOut";
import { FaHome } from "react-icons/fa";

const Payment = () => {
  return (
    <div>
      <Cover
        img={"https://i.ibb.co.com/qmcPN8w/payment.png"}
        titleName={"Payment "}
      ></Cover>
     
      <div>
        <CheckOut></CheckOut>
        <Link to={"/"}>
        <button className="btn flex items-center mx-auto bg-blue-500 my-4 text-white font-medium">
          <FaHome></FaHome>
          <h1>Back to Home</h1>
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Payment;
