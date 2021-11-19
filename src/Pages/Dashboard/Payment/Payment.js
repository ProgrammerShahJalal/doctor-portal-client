import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JwIBsFBTfTsSwmz8bqtyXmnIOlnITi40PZxeH94CVw4gw41R2R6chUyOdKef9J0CCNKuB22rOlGeVlfUcS2L9Nf008TuoJ83R');

const Payment = () => {
    const [appointment, setAppointment] = useState({});

    const { appointmentId } = useParams();
    useEffect(() => {
        fetch(`https://polar-falls-67924.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Please pay for {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/