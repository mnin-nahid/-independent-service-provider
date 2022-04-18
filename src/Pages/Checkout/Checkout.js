import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams();

    return (
        <div>
            <h2 className='text-center my-5'>This is Checkout page! : {serviceId}</h2>

        </div>
    );
};

export default Checkout;