import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../../images/login.webp'
import './Login.css'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();



    const handelSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateRegister = event => {
        navigate('/ragistration');
    }

    return (
        <div className='login text-center w-50 mt-4 mx-auto'>
            <div className='d-flex'>
                <div>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-100 my-auto'>
                    <h2>Login to <br /> <span className='text-primary'>GoTechDoctor</span></h2>
                    <form className='w-100' onSubmit={handelSubmit}>
                        <input ref={emailRef} className='w-75 mt-2' type="email" name="email" id="email" placeholder='enter your email' required />
                        <input ref={passwordRef} className='w-75 mt-2' type="password" name="password" id="password" placeholder='Enter your password' required />
                        <br />
                        <button className='btn btn-primary mt-2' type="submit">Log in</button>
                    </form>
                    <small><button className='btn btn-link'>Forgot password</button></small>
                </div>
            </div>
            <p className='mt-4'>New to Unique Car Service? <Link to='/ragistration' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Create an account</Link></p>
        </div>
    );
};

export default Login;