import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './SplashPage.css';


const SplashPage = () => {
    return (
        <div className='splash-page-container'>
            <div className='sp-text'>
            <div className='sp-app-container'>
                <NavLink to='/posts' exact={true}>
                - chekkit -
                </NavLink>
            </div>
                <h4>Chekkit is a reddit clone.<br></br>
                    Enter and chekk out blog posts, create your own posts and comments.
                </h4>
                <div className='error-line'></div>
                {/* <div className='error-button-container'>
                    <a href='/'>
                        <button className='error-button'>Let's go!</button>
                    </a>
                </div> */}
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
