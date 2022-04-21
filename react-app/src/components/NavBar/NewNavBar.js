import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import SignUpFormModal from '../auth/SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';
import './NewNavBar.css'

const NewNavBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const allPosts = useSelector(state => Object.values(state.post))
    const allComms = useSelector(state => Object.values(state.community))
    const [search, setSearch] = useState('');
    const [searchShow, setSearchShow] = useState(false);
    const [homeBtnShow, setHomeBtnShow] = useState(false);
    const filtered = allPosts.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase()) || post.username.toLowerCase().includes(search.toLowerCase())
    });
    console.log('NAVBAR COMMS: ', allComms)

    const handleChange = e => {
        setSearch(e.target.value);
        if (e.target.value === '') setSearchShow(false);
        else setSearchShow(true);
    };

    const handleSearch = e => {
        setSearchShow(false);
    };

    return (
        <header className='header-container'>
            <div className='header-container-2'>
                <div className='header-container-3'>
                    <span></span>
                    <div className='nnb-left-container'>
                        <button className='nnb-left'></button>
                        <div className='filler-container'></div>
                        <NavLink to='/posts' exact={true} className='logo-container'>
                            <i className="fa-brands fa-reddit-alien"></i>
                            <p className='nnb-app-name'>chekkit</p>
                        </NavLink>
                        <div className='nnb-comm'>
                            <button className='nnb-comm-button' onClick={() => setHomeBtnShow(!homeBtnShow)}>
                                <span className='nnb-span'>
                                    <h1 className='nnb-h1'>Home</h1>
                                </span>
                                <i className="fa-solid fa-house"></i>
                                <i className="fa-solid fa-angle-down"></i>
                            </button>
                            {homeBtnShow &&
                            <div className='the-menu'>
                                <div className='results-line'>
                                    My communities
                                </div>
                                <Link className='ns-button' to={'/new-subchekkit/'}>
                                    <button className='cc-button' to>
                                        <i className="fa-solid fa-plus nav-icon"></i>
                                        <span className='cc-line'>Create Community</span>
                                    </button>
                                </Link>
                                 {allComms.map(comm => (
                                    <div>




                                        <Link className='result cc-a'>
                                            <div className='community-line'>
                                                <img className='community-img' src={comm.comm_img} />
                                            </div>
                                            <span>
                                                <div className='post-title'>
                                                    {`c/${comm.comm_name}`}
                                                </div>
                                            </span>
                                        </Link>
                                    </div>
                                    ))}
                            </div>

                                }
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
                            <input className='input-bar' onChange={handleChange} placeholder='Search Chekkit'></input>
                            <div className='query-result-container'>
                                {searchShow && (filtered.map(post => (
                                    <div className='query-result'>
                                        <div className='results-line'>
                                            Search results
                                        </div>
                                        <Link className='result' to={`/posts/${post.id}`} onClick={handleSearch}>
                                            <div>
                                                <div>
                                                    <span>
                                                        <div className='post-title'>
                                                            {`${post.title}`}
                                                        </div>
                                                        <div className='community-line'>
                                                            <img className='community-img' src={user.profile_img} />
                                                            <spa>c/{`${post.username}`}</spa>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>)))}
                            </div>
                        </form>
                    </div>
                </div>

                {/* after search bar */}
                {!user && (
                    <div className='nav-buttons'>
                        <li>
                            <SignUpFormModal />
                        </li>
                        <li className='nav-left'>
                            <Link to='login'>
                                <button type='submit' className='nav-signup nav-login'>Log In</button>
                            </Link>
                        </li>
                    </div>
                )}

                {user && (
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
                        <div className='nnb-blank'>
                            <div className='nnb-containers'>
                                <div className='nnb-containers'>
                                    <span className='nnb-span-3'>
                                        <a className='nnb-anchors' href='#'>
                                            <i class="fa-regular fa-comment-dots nav-icon"></i>
                                        </a>
                                    </span>
                                    <span className='nnb-span-3'>
                                        <a className='nnb-anchors' href='#'>
                                            <i class="fa-regular fa-bell nav-icon"></i>
                                        </a>
                                    </span>
                                    <span className='nnb-span-3'>
                                        <NavLink className='nnb-anchors' to='/new' exact={true}>
                                            <i className="fa-solid fa-plus nav-icon"></i>
                                        </NavLink>
                                    </span>
                                    <span className='nnb-span-3'>
                                        <a className='nnb-anchors' href='#'>
                                            <i class="fa-solid fa-bullhorn nav-icon"></i>
                                        </a>
                                    </span>
                                    <span className='nnb-span-3'>
                                        <button className='nnb-bitcoin' href='#'>
                                            <div className='nnb-bit-container'>
                                                <i class="fa-brands fa-bitcoin"></i>
                                                <span className='nnb-bit-text'>Free</span>
                                            </div>
                                        </button>
                                    </span>
                                </div>
                                <div className='hud'>
                                    <span></span>
                                    <LogoutButton />
                                    {/* <button className='_10K'>
                                    <span className='nnb-span-4'>
                                        <span className='nnb-span-5'>
                                            <div className='nnb-profpic-container'>
                                                <div className='nnb-profpic-container-2'>
                                                    <div className='nnb-ppic-round'></div>
                                                    <div className='nnb-profpic-container-3'>
                                                        <img alt='user avatar' className='user-avatar'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className='_1pH'>
                                                <span className='nnb-username'>username</span>
                                            </span>
                                        </span>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </span>
                                </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
}

export default NewNavBar;
