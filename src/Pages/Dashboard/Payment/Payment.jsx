// import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import UseCart from '../../../Hook/UseCart';


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {

    const [cart] = UseCart();
    // console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    // console.log(total);
    const price = parseFloat(total.toFixed(2));
    console.log(price);

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>

            <SectionTitle subHeading="Add a Payment" heading="Add Payment"></SectionTitle>

            <Elements stripe={stripePromise}>

                <CheckoutForm price={price} cart={cart} ></CheckoutForm>

            </Elements>

        </div >
    );
};

export default Payment;