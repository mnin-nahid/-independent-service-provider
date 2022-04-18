import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams();

    const location = useLocation();

    return (
        <div style={{height: 500}}>
            <h2 className='text-center'>This is Checkout page! : {serviceId}</h2>

        </div>
    );
};

export default Checkout;