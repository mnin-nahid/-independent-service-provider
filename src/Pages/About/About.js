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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quod incidunt eveniet minima! Aperiam dolorum vitae, esse tenetur tempora reiciendis.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat esse, consequuntur modi, eius mollitia quasi voluptas ipsum nulla sit facilis labore doloribus dolores fugiat, odio eligendi pariatur ipsam accusantium! Exercitationem?</p>
                </div>
            </div>
        </div>
    );
};

export default About;