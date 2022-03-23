import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
// import '../../NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/');
  };

  return <div className='nav-buttons'>
    <button className='nav-signup' onClick={onLogout}>Logout</button>
    </div>
};

export default LogoutButton;
