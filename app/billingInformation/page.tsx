"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./../components/billingInformation/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51O9nQPE5HT5HdzuejTacpf4KzE2yWDWubQ3k5Yf4wIwMmiG4N0DHYsCIlamxcJnnpCDfvzMpKwXgl2xz92ZGZV1x00GhULjF06"
);

type Props = {};

const BillingInformation = (props: Props) => {
  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm />
    </Elements>
  );
};

export default BillingInformation;
