import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../images/login.webp'

const Login = () => {
    const navigateRegister = () => {
        console.log('button clicked')
    }
    return (
        <div className='border border-primary text-center w-50 mt-4 mx-auto'>
            <div className='d-flex border border-primary'>
                <div className='border border-primary'>
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-100 my-auto'>
                    <h2>Login to <br /> <span className='text-primary'>GoTechDoctor</span></h2>
                    <form className='border border-primary w-100'>
                        <input className='w-75 mt-2' type="email" name="email" id="email" placeholder='enter your email' required/>
                        <br />
                        <input className='w-75 mt-2' type="password" name="password" id="password" placeholder='Enter your password' />
                        <br />
                        <input className='btn btn-primary w-50 mt-2' type="submit" value="Login" />
                    </form>
                </div>
            </div>
            <p>New to Unique Car Service? <Link to='/ragistration' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Create an account</Link></p>
        </div>
    );
};

export default Login;