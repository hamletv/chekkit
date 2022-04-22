import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(signUp(firstName, lastName, username, email, password, repeatPassword));
    if(data) {
        setErrors(data)
        if(password !== repeatPassword){
          setPassword('')
          setRepeatPassword('')
        }
      }
      // setShowModal(false);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  };

  const updateLastName = (e) => {
    setLastName(e.target.value)
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='su-page-container'>
      <div className='su-container'>
        <div className='lg-app-name'>chekkit</div>
        <div className='lg-line'>Dive Into Whatever is Here</div>
    <form onSubmit={onSignUp}>
      <div className='lg-errors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error.split(':')[1]}</div>
        ))}
      </div>
      <div>
        <label htmlFor='first name'/>
        <div className='lg-title-row'>
          <div className='lg-title-input'>
          <input type='text'
          className='lg-title-field'
          placeholder='First name (required)'
          required={true}
          name='firstname'
          onChange={updateFirstName}
          value={firstName} />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor='last name'/>
        <div className='lg-title-row'>
          <div className='lg-title-input'>
          <input type='text'
          className='lg-title-field'
          placeholder='Last name (required)'
          required={true}
          name='lastname'
          onChange={updateLastName}
          value={lastName}></input>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor='username'/>
        <div className='lg-title-row'>
          <div className='lg-title-input'>
            <input
              className='lg-title-field'
              placeholder='Desired username (required)'
              type='text'
              required={true}
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
        </div>
        </div>
      </div>
      <div>
        <label htmlFor='email'/>
        <div className='lg-title-row'>
          <div className='lg-title-input'>
            <input
              className='lg-title-field'
              placeholder='Email (required)'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              required={true}
            />
        </div>
        </div>
      </div>
      <div>
        <label htmlFor='password'/>
        <div className='lg-title-row'>
          <div className='lg-title-input'>
        <input
          placeholder='Password (required)'
          className='lg-title-field'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          required={true}
        ></input>
        </div>
        </div>
      </div>
      <div>
        <label htmlFor='password'/>
        <div className='lg-title-row'>
          <div className='lg-title-input'>
        <input
          className='lg-title-field'
          placeholder='Confirm password (required)'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        />
        </div>
        </div>
      </div>
      <div className='lg-button-container'>
        <button className='lg-post-button' type='submit' disabled={!firstName || !lastName || !username || !email || !password || !repeatPassword}>Sign Up</button>
      </div>
      <div className='su-bottom'>
      </div>
    </form>
    </div>
    </div>
  );
};

export default SignUpForm;
