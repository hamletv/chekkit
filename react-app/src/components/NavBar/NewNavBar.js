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
        if (profileClicked) return;
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
                            </label>
                            <input className='input-bar' placeholder='Search Chekkit'></input>
                        </form>
                    </div>
                </div>
                <div className='nnb-after-search'>
                    <div className='nnb-as-container-1'>
                        <div className='nnb-as-container-2'>
                            <a className='nnb-as-a1'>
                                <i class="fa-solid fa-arrow-up-right-dots nav-icon"></i>
                            </a>
                            <a className='nnb-as-a1'>
                                <i class="fa-solid fa-sink nav-icon"></i>
                            </a>
                            <a className='nnb-as-a1'>
                                <i class="fa-solid fa-video nav-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div className='_19o'>
                        <div className='XZK'>
                            <div className='XZK'>
                                <span className='nnb-span-3'>
                                    <a className='_1x6' href='#'>
                                        <i class="fa-regular fa-comment-dots nav-icon"></i>
                                    </a>
                                </span>
                                <span className='nnb-span-3'>
                                    <a className='_1x6' href='#'>
                                        <i class="fa-regular fa-bell nav-icon"></i>
                                    </a>
                                </span>
                                <span className='nnb-span-3'>
                                    <a className='_1x6' href='#'>
                                        <i className="fa-solid fa-plus nav-icon"></i>
                                    </a>
                                </span>
                                <span className='nnb-span-3'>
                                    <a className='_1x6' href='#'>
                                        <i class="fa-solid fa-bullhorn nav-icon"></i>
                                    </a>
                                </span>
                                <span className='nnb-span-3'>
                                    <button className='_1t5' href='#'>
                                        <div className='jEU'>
                                            <i class="fa-brands fa-bitcoin"></i>
                                            <span className='_2Q7'>Free</span>
                                        </div>
                                    </button>
                                </span>
                            </div>
                            <div className='hud'>
                                <span></span>
                                <button className='_10K'>
                                    <span className='DFK'>
                                        <span className='_3Kf'>
                                            <div className='efd'>
                                                <div className='_1cy'>
                                                    <div className='_2_Q'></div>
                                                    <div className='_1XJ'>
                                                        <img alt='user avatar'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className='_1pH'>
                                                <span className='_2BM'>username goes here</span>
                                            </span>
                                        </span>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NewNavBar;
