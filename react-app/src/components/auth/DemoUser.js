import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from '../../store/session';

const DemoUser = () => {
    const dispatch = useDispatch();
    const handleDemo = (e) => {
        e.preventDefault()
        dispatch(login('demo@aa.io', 'password'))
    }
    return (
        <button id='demo_button' onClick={handleDemo} type="submit" className=''>Demo</button>
    )
}

export default DemoUser;
