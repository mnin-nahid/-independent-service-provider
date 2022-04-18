import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {id, name, price, img } = service;

    const navigate = useNavigate();

    const handePurchase = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="service-details my-auto">
                <h6>{name}</h6>
                <p><small>{price}</small></p>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small></p>
                <button onClick={() => handePurchase(id)}  className='btn btn-primary w-75'>Purchase</button>
            </div>

        </div>
    );
};

export default Service;