import React from 'react';
import nahidphoto from '../../images/mnin.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className="row my-5">
                <div className='profile-image col-md-6'>
                    <img className='w-75' src={nahidphoto} alt="" />
                </div>
                <div className='col-md-6 my-auto'>
                    <h3>Hey i'am <span className='text-primary'>Nayan</span></h3>
                    <p>My aim in life has always been to become a successful software engineer. Software engineering is highly respected in the field of information technology as almost every field is associated with computers these days.</p>
                    <br />
                    <p>Having a thorough focus on all the fields of software engineering is important so that more benefits of software could be realized. Imagine the kind of satisfaction a software engineer gets after successfully creating a product for a crucial purpose. By focusing upon several such aspects in detail, it has become possible to realize my aim in life without foregoing my career choice. Students who would like to choose software engineering as their career must work hard as there are multiple aspects involved in it.</p>
                </div>
            </div>
        </div>
    );
};

export default About;