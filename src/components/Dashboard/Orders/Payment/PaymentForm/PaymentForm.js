import React, { useContext, useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import useResponsiveFontSize from "../useResponsiveFontSize";
import { Button } from "react-bootstrap";


const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#fafaff",
                    letterSpacing: "0.050em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": { color: "#ffffff" }
                },
                invalid: { color: "#9e2146" }
            }
        }),
        [fontSize]
    );
    return options;
};


const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [paymentError, setPaymentError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });

        if (error) {
            //   console.log('[error]', error);
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            // handlePayment(paymentMethod.id);
            // console.log('[PaymentMethod]', paymentMethod);
        }

        console.log("[PaymentMethod]", error);
    };

    return (
        <div className="container p-5">
            Process Payment Here -
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Card number
                        <CardNumberElement
                            options={options}
                            onReady={() => {
                                // console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                // console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                // console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                // console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Expiration date
                        <CardExpiryElement
                            options={options}
                            onReady={() => {
                                // console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                // console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                // console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                // console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        CVC
                        <CardCvcElement
                            options={options}
                            onReady={() => {
                                // console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                // console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                // console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                // console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                </div>
                <div>
                    <Button className="btn btn-primary btn-lg" type="submit" disabled={!stripe}>
                        Pay
                    </Button>
                </div>
            </form>
            <div>
                {
                    paymentError && <p style={{ color: "red" }}>{paymentError}</p>
                }
                {
                    paymentSuccess && <p style={{ color: "green" }}>Your payment was successful !</p>
                }
            </div>
            <div>
                <p>Test Value</p>
                <p>Card No : 4242 4242 4242 4242</p>
                <p>Expiry Date : 12/25</p>
                <p>CVC : 123</p>
            </div>
        </div>
    );
};

export default PaymentForm;