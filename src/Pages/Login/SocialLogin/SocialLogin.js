import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';
import googleLogo from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (user) {
        navigate('/home')
    }
    let errorElement;

    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='social-logiin-splider'></div>
                <p className='mt-3 px-2'>OR</p>
                <div className='social-logiin-splider'></div>
            </div>
            <div>
                {errorElement}
                <button

                    onClick={() => signInWithGoogle()}
                    className='btn bg-white border border-primary w-50 mt-3 d-block mx-auto'>
                    <img style={{ width: 30 }} src={googleLogo} alt="" />
                    <span className='px-2'>With Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;