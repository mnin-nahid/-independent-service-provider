import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../images/login.webp'
import './Registration.css'

const Registration = () => {
    return (
        <div className='registration text-center w-50 mt-4 mx-auto'>
            <div className='d-flex'>
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-100 my-auto'>
                    <h2>Registration to <br /> <span className='text-primary'>GoTechDoctor</span></h2>
                    <form className='w-100'>
                        <input className='w-75 mt-2' type="text" name="name" id="name" placeholder='Enter your name'/>
                        <input className='w-75 mt-2' type="email" name="email" id="email" placeholder='enter your email' required />
                        <br />
                        <input className='w-75 mt-2' type="password" name="password" id="password" placeholder='Enter your password' />
                        <br />
                        <input className='btn btn-primary w-50 mt-2' type="submit" value="Registration" />
                    </form>
                </div>
            </div>
            <p className='mt-4'>Alrady have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Login to your account</Link></p>
        </div>
    );
};

export default Registration;