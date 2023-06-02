// import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>

            <SectionTitle subHeading="Add a Payment" heading="Add Payment"></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>

        </div >
    );
};

export default Payment;