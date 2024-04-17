"use client";
import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // Validation
    const cardElement = elements.getElement(CardNumberElement);
    if (!cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message || 'An error occurred');
      console.log("Error: ", error);
    } else {
      setError(null);
      console.log("Payment Success: ",paymentMethod);
    }
  };

  return (
    <div className=" h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 flex justify-center items-center shadow-md  flex-col gap-2 max-w-96 mx-auto  p-4 border rounded"
      >
        <div className="flex flex-col gap-0.5 justify-start items-start w-full mb-3">
          <h1 className="text-2xl font-semibold">Add Billing Information</h1>
          <p className="text-sm text-gray-400">
            This info will be used for payment related to product development
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full  mb-2">
          <label
            htmlFor="cardNumber"
            className="text-left text-gray-600 font-semibold"
          >
            Card Number <span className="text-red-600">*</span>
          </label>
          <CardNumberElement
            options={{ placeholder: "0000 0000 0000 0000" }}
            className="border p-2 rounded bg-white"
            id="cardNumber"
          />
        </div>
        <div className="flex gap-2 w-full mb-4">
          <div className="flex flex-col w-1/2 gap-2">
            <label
              htmlFor="expiry"
              className="text-left text-gray-600 font-semibold"
            >
              Expiry Date <span className="text-red-600">*</span>
            </label>
            <CardExpiryElement
              options={{ placeholder: "MM/YY" }}
              className="border p-2 rounded bg-white"
              id="expiry"
            />
          </div>
          <div className="flex flex-col w-1/2  gap-2">
            <label
              htmlFor="cvc"
              className="text-left text-gray-600 font-semibold"
            >
              CVC <span className="text-red-600">*</span>
            </label>
            <CardCvcElement
              options={{ placeholder: "123" }}
              className="border p-2 rounded bg-white"
              id="cvc"
            />
          </div>
        </div>
        {error && (
          <div className="text-red-600 mb-4 text-sm">{error}</div>
        )}
        <button
          type="submit"
          disabled={!stripe}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-full"
        >
          Register as a company
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
