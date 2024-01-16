import React from 'react';
import logo from '../../image/udamy.png'
import baner from '../../image/form(1).png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
         <nav>

           <img src={logo} alt="" />

           <a href="/home">Home</a>
           <a href="/course">Course</a>
           <a href="/review">Review</a>
           <a href="/contact">Contact</a>

        </nav>   

        <div className="baner">
            <img src={baner} alt="" />
        </div>
        </div>
    );
};

export default Header;