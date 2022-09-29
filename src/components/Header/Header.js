import React from 'react';
import './Header.css';
import image from './logo.jpg';

const Header = () => {
    return (
        <div className='title-header'>
            <img src={image} alt='' />
            <h2>Health<span className='tips'>TIPS</span></h2>
        </div>
    );
};

export default Header;