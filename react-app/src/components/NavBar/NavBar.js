import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [profileClicked, setProfileClicked] = useState(false);
  const [postForm, setPostForm] = useState(true);

  const openMenu = () => {
    if(profileClicked) return;
    setProfileClicked(true);
  };
  return (
    <nav id='nav-bar'>
      <div>
        <NavLink to='/' exact={true}>
          <img className='logo' src='/chekkit_logo2.png' alt='chekkit logo'/>
        </NavLink>
      </div>
      <div className='app-name'>
        <NavLink to='/' exact={true}>
          chekkit
        </NavLink>
      </div>
      <div className='session-links'>
        <ul>
          {/* <li>
            <NavLink to='/' exact={true} activeClassName='active nav-left'>
              Home
            </NavLink>
          </li> */}
          <li>
            <NavLink to='/login' exact={true} activeClassName='active nav-right'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/sign-up' exact={true} activeClassName='active nav-right'>
              Sign Up
            </NavLink>
          </li>
          {/* <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li> */}
          <li className='nav-right'>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
