import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './404Page.css';


const ErrorPage = () => {
    return (
        <div className='error-page-container'>
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
        </div>
     );
}

export default ErrorPage;
