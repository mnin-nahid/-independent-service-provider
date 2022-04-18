import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import loginImg from '../../../images/login.webp'
import SocialLogin from '../SocialLogin/SocialLogin';
import './Registration.css'

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='registration text-center w-50 mt-4 mx-auto'>
            <div className='d-flex'>
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-100 my-auto'>
                    <h2>Registration to <br /> <span className='text-primary'>GoTechDoctor</span></h2>
                    <form className='w-100' onSubmit={handleRegister}>
                        <input className='w-75 mt-2' type="text" name="name" id="name" placeholder='Enter your name'/>
                        <input className='w-75 mt-2' type="email" name="email" id="email" placeholder='enter your email' required />
                        <input className='w-75 mt-2' type="password" name="password" id="password" placeholder='Enter your password' required/>
                        <br />
                        <button className='btn btn-primary mt-2' type="submit">Registration</button>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <p className='mt-4'>Alrady have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Login to your account</Link></p>
        </div>
    );
};

export default Registration;