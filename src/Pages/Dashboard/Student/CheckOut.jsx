import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../Component/useAxiosSecure";


const CheckOut = ({ item, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user}=useContext(AuthContext)
  const [cardError, setCardError] = useState("");
  const[axiosSecure]=useAxiosSecure()

  
  const [clientSecret, setClientSecret] = useState("");
  const  price =item.price

  useEffect(()=>{
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', {price})
          .then(res => {
              console.log(res.data.clientSecret)
              setClientSecret(res.data.clientSecret);
          })
  }
}, [price, axiosSecure])
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("[PaymentMethod]", paymentMethod);
    }
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name:user?.displayName || 'anonymous'
          },
        },
      },
    );
    if(confirmError){
      console.log(confirmError);
    }
console.log(paymentIntent)

  };

  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-5 justify-around ">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-900 px-4 py-2 text-sm font-medium text-white "
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-900 px-4 py-2 text-sm font-medium text-white"
          >
            Pay ${price}
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckOut;
