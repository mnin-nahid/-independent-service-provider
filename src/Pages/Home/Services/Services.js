import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('servicedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <h2 className='text-center text-primary my-4'>I can do for you!</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;