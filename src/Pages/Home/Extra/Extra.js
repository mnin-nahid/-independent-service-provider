import React from 'react';
import img1 from '../../../images/extra/img10.png';
import img2 from '../../../images/extra/img11.jpg';
import img3 from '../../../images/extra/img12.jpg';
import img4 from '../../../images/extra/img14.png';
import './Extra.css'

const Extra = () => {
    return (
        <div className='extra-support'>
            <div>
                <img src={img1} alt="" />
                <h6 className='text-primary text-center'>IT industry</h6>
            </div>
            <div>
                <img src={img2} alt="" />
                <h6 className='text-primary text-center'>Fast Services</h6>
            </div>
            <div>
                <img src={img3} alt="" />
                <h6 className='text-primary text-center'>Desktop Computing</h6>
            </div>
            <div>
                <img src={img4} alt="" />
                <h6 className='text-primary text-center'>IT Consultancy</h6>
            </div>
        </div>
    );
};

export default Extra;