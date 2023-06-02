import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useAuth from "../../../Hook/useAuth";
// import './CheckoutForm.css';



const CheckoutForm = ({ price, cart }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    // for 
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then((response) => {
                    console.log(response.data.clientSecret);
                    setClientSecret(response.data.clientSecret);
                })
        }
    }, [price, axiosSecure]);

    // for submit payment
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        // console.log('card', card)
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        // display confirm
                    }
                })
        }

    }

    return (
        <div className="flex flex-col lg:w-3/4 md:mx-auto mt-3 md:mt-4 lg:mt-12 mb-6">
            <form className="my-4 " onSubmit={handleSubmit}>
                <div className="input_group ">
                    <CardElement
                        className="input_form px-1"
                        options={{
                            style: {
                                base: {
                                    fontSize: '14px', // Adjust the font size as needed
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <div className="text-center">
                    <button disabled={!stripe || !clientSecret || processing} className="btn  btn-warning btn-md mt-6" type="submit">
                        Payment
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;