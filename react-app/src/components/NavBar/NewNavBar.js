import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import SignUpFormModal from '../auth/SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';
import './NewNavBar.css'

const NewNavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [profileClicked, setProfileClicked] = useState(false);
  const openMenu = () => {
    if(profileClicked) return;
    setProfileClicked(true);
  };

  return (
    <header className='header-container'>
      <div className='header-container-2'>
          <div className='header-container-3'>
            <span className='_1RI'></span>
            <div className='_32X'>
                <button className='_3Ka'></button>
                <div className='filler-container'></div>
            <a to='/posts' exact={true} className='logo-container'>
                <i className="fa-brands fa-reddit-alien"></i>
                <p className='nnb-app-name'>chekkit</p>
            </a>
            <div className='nnb-comm'>
                <button className='nnb-comm-button'>
                    <span className='nnb-span'>
                        <h1 className='nnb-h1'>Home</h1>
                    </span>
                    <i className="fa-solid fa-house"></i>
                    <i className="fa-solid fa-angle-down"></i>
                </button>
            </div>
            {/* // make into separate component and insert? */}
            </div>
            <div className='nnb-search-container'>
                <form className='search-form'>
                    <label>
                        <div className='icon-container'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        {/* <span className='nnb-span-2'>Search Chekkit</span> */}
                    </label>
                    <input className='input-bar' placeholder='Search Chekkit'></input>
                </form>
            </div>
          </div>

      </div>
    </header>
  );
}

export default NewNavBar;
