import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {

    if(!stripePromise) {
        /* helps in API interaction with stripe API */
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHED_API_KEY);
    }

    return stripePromise;
}

export default getStripe;