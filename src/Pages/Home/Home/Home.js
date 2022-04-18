import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;