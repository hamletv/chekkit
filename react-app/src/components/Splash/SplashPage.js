import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './SplashPage.css';


const SplashPage = () => {
    return (
        <div className='splash-page-container'>
            <div className='error-text'>
                <h1> - 404 - </h1>
                <h4>You're a little lost.<br></br>
                    You've reached the middle of nowhere of our site.
                </h4>
                <p>Click below to be redirected.</p>
                <div className='error-line'></div>
                <div className='error-button-container'>
                    <a href='/'>
                        <button className='error-button'>Let's go!</button>
                    </a>
                </div>
            </div>
            <footer className='footer'>
                <div className='linkedin'>
                <a href='https://www.linkedin.com/in/hamlet-villa/'>
                    <i className="fa-brands footer-logo fa-linkedin"></i>
                </a>
                </div>
                <div className='github'>
                <a href='https://github.com/hamletv'>
                <i className="fa-brands footer-logo fa-github"></i>
                </a>
                </div>
            </footer>
        </div>
     );
}

export default SplashPage;
