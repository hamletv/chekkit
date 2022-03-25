import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [profileClicked, setProfileClicked] = useState(false);
  const [postForm, setPostForm] = useState(true);

  const openMenu = () => {
    if(profileClicked) return;
    setProfileClicked(true);
  };

  return (
    <nav id='nav-bar'>
      <div className='logo-container'>
        <NavLink to='/' exact={true}>
          {/* <img className='logo' src='/chekkit_logo2.png' alt='chekkit logo'/> */}
          <i className="fa-brands fa-reddit-alien"></i>
        </NavLink>
      </div>
      <div className='app-name-container'>
        <NavLink to='/' exact={true}>
          chekkit
        </NavLink>
      </div>

      <div className='session-links'>
        <ul>
      {!user && (
        <div className='nav-buttons'>
          <li>
            <SignUpFormModal />
          </li>
          <li className='nav-left'>
            <LoginFormModal />
          </li>
        </div>
              )}
      {user && (
        <div>
          <NavLink to='/new' exact={true}>
            <i className="fa-solid fa-plus"></i>
            </NavLink>
          <li className='nav-right'>
            <LogoutButton />
          </li>
        </div>
      )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
