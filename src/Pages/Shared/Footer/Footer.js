import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4 py-1 bg-primary text-white'>
            <p><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;