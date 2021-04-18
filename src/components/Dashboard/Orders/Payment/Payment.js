import React from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from "./PaymentForm/PaymentForm";


const stripePromise = loadStripe(
    'pk_test_51IeAU6BaHZDfGLSAn6TSxh0VrHbyCCfwKkfuDumhx4NS4bpdsFcvTO6q4z2HTfXrkZiArehI7cuAFguHTJCmruQ10037NTAFNn'
);


const Payment = ({handlePayment}) => {

    return (
        <Elements stripe={stripePromise}>
            <PaymentForm handlePayment={handlePayment}/>
        </Elements>
    );
};

export default Payment;