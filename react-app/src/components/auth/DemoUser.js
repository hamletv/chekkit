import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from '../../store/session';
import './LoginForm.css'


const DemoUser = () => {
    const dispatch = useDispatch();
    const handleDemo = (e) => {
        e.preventDefault()
        dispatch(login('demo@aa.io', 'password'))
    }
    return (
        <button className='lg-post-button lg-demo' onClick={handleDemo} type="submit">Demo</button>
    )
}

export default DemoUser;
