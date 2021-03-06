import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import DemoUser from './DemoUser';
import './LoginForm.css';

const LoginForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    // setShowModal(false);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/posts' />;
  }

  return (
    <div className='page-container'>
      <div className='login-container'>
        <div className='lg-app-name'>chekkit</div>
        <div className='lg-line'>Dive Into Whatever is Here</div>
        <form onSubmit={onLogin}>
          <div className='lg-errors'>
            {errors.map((error, ind) => (
              <div key={ind}>{error.split(':')[1]}</div>
            ))}
          </div>
          <div>
            <label htmlFor='email'/>
            <div className="lg-title-row">
              <div className="lg-title-input">
                <input
                  className='lg-title-field'
                  name='email'
                  type='text'
                  placeholder='User Email (required)'
                  value={email}
                  onChange={updateEmail}
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='password'/>
            <div className="lg-title-row">
              <div className="lg-title-input">
                <input
                  className='lg-title-field'
                  name='password'
                  type='password'
                  placeholder='Password (required)'
                  value={password}
                  onChange={updatePassword}
                />
              </div>
            </div>
            <div className='lg-button-container'>
              <button type='submit' className='lg-post-button' disabled={!email || !password}>Login</button>
            </div>
          </div>
          <div className='lg-button-container'>
            <DemoUser/>
          </div>
        </form>
      </div>
      <footer className='footer'>
                <div className='linkedin'>
                <a className='linked' href='https://www.linkedin.com/in/hamlet-villa/' target='_blank'>
                    <i className="fa-brands footer-logo fa-linkedin"></i>
                </a>
                </div>
                <div className='github'>
                <a className='git' href='https://github.com/hamletv' target='_blank'>
                <i className="fa-brands footer-logo fa-github"></i>
                </a>
                </div>
            </footer>
    </div>
  );
};

export default LoginForm;
