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
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
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

    // Create a Payment Method
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        email: e.target.email.value,
        name: e.target.cardholderName.value,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }

    // Confirm the Card Payment
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
    } else {
      if (paymentIntent.status === "succeeded") {
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
         refetch()

          if (res.data && res.data.status === "success") {
            Swal.fire({
              icon: "success",
              title: "Payment Success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/dashboard/paymentHistory')
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
        Pay $50.00
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

const CheckOut = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Cake Orders</h2>
        <p className="text-xl font-semibold text-center mb-2">$50.00</p>
        <p className="text-center mb-6">Order your cake now</p>

        {/* Wrap the form in Elements to use Stripe */}
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckOut;
