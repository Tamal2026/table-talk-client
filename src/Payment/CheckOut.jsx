import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../UseAxiosSucure/UseAxiosSecure";
import useCart from "../UseCart/UseCart";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const CheckOutForm = () => {
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (!clientSecret) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
        });
    }
  }, [axiosSecure, totalPrice, clientSecret]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (cardElement === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }

    const { paymentIntent, error: cardConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (cardConfirmError) {
      console.error("Card confirmation error:", cardConfirmError.message);
    } else if (paymentIntent.status === "succeeded") {
      const payment = {
        email: user.email,
        price: totalPrice,
        date: new Date(),
        transactionId: paymentIntent.id,
        cartId: cart.map((item) => item._id),
        MenuId: cart.map((item) => item.menuId),
        status: "pending",
      };

      try {
        const res = await axiosSecure.post("/payments", payment);
        refetch();

        if (res.data && res.data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Payment Success",
            text: "Choose your next action",
            showCancelButton: true,
            confirmButtonText: "Give Review",
            cancelButtonText: "Back to Home",
            allowOutsideClick: false, 
            customClass: {
              popup: "animate__animated animate__zoomIn",
              confirmButton: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md",
              cancelButton: "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md",
            },
            reverseButtons: true,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/dashboard/addReview");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              navigate("/");
            }
          });
        } else {
          console.error("Unexpected response structure:", res.data);
        }
      } catch (postError) {
        console.error("Error saving payment to database:", postError);
        Swal.fire({
          icon: "error",
          title: "Payment processing failed",
          text: "Please try again later.",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          readOnly
          defaultValue={user.email}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Card Information
        </label>
        <div className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#9e2146" },
              },
            }}
          />
        </div>
      </div>

      <div>
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="cardholderName"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Full name on card"
        />
      </div>

      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
      >
        Pay ${totalPrice.toFixed(2)}
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

const CheckOut = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Food Orders</h2>
      
        <p className="text-center mb-6">Order your food now</p>

    
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckOut;
