import Cover from "../Pages/Shared/Cover/Cover";

import CheckOut from "../Payment/CheckOut";

const Payment = () => {
  return (
    <div>
      <Cover
        img={"https://i.ibb.co.com/qmcPN8w/payment.png"}
        titleName={"Payment "}
      ></Cover>
      <div>
        <CheckOut></CheckOut>
      </div>
    </div>
  );
};

export default Payment;
