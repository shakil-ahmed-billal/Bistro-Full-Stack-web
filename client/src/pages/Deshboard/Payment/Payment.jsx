import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Shared/SectionTitle"
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
const Payment = () => {

    // TODO : add publishable key set
    const stripePromise = loadStripe(`${import.meta.env.VITE_PaymentKey}`)

    return (
        <div>
            <SectionTitle
                heading="Please Pay Fast"
                subHeading="Payment"
            ></SectionTitle>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>

            </div>
        </div>
    )
}

export default Payment
