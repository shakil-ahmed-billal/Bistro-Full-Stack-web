import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [cart , refetch] = useCart()
    const [error, setError] = useState('')
    const [transactionId , setTransactionId] = useState('')


    const totalPrice = cart?.reduce((total, item) => total + item.price, 0)
    const { user } = useAuth()
    console.log('clineSecret data', clientSecret)


    useEffect(() => {
        if (totalPrice > 0) {
            const handleData = async () => {
                const { data } = await axiosSecure.post('/create-payment', { price: totalPrice })
                console.log(data.clientSecret)
                setClientSecret(data.clientSecret)
            }
            handleData()
        }
    }, [axiosSecure, totalPrice])

    if (!stripe || !elements) {
        return <div>Loading payment form...</div>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }
        
        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm payment', confirmError)
        }
        else {
            console.log('confirm intent', paymentIntent)
            setTransactionId(paymentIntent.id)

            // now save the payment in the database
            const payment = {
                email: user?.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(), //utc time zone
                cardId: cart.map(item => item._id),
                menuItemId: cart.map(item => item.menuId),
                status: 'pending'
            }
            const {data} = await axiosSecure.post('/payment' , payment)
            if(data?.deleteResult?.deletedCount > 0){
                refetch()
                console.log('payment save',data)
                Swal.fire({
                    title: "Payment Successful!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
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
                <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId&& <p className='text-green-500'>{transactionId}</p>}
            </form>
        </div>
    )
}

export default CheckoutForm
