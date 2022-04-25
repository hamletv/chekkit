import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { addComm } from '../../store/community';
// import { Modal } from '../../context/Modal';
// import './SignUpForm.css'

const CreateCommForm = ({ setShowModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [comm_name, setComm_Name] = useState('');
  const [comm_img, setComm_Img] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {user_id: user.id, comm_name, comm_img, about}
    const data = await dispatch(addComm(payload))
    if (data.errors) {
      setErrors(data.errors);
    }
    history.push('/communities')
    // setShowModal(false)
  };

  const updateCommName = (e) => {
    setComm_Name(e.target.value)
  }
  const updateCommImg = (e) => {
    setComm_Img(e.target.value)
  }
  const updateAbout = (e) => {
    setAbout(e.target.value)
  }

  return (
    <div className='su-page-container'>
      <div className='su-container'>
        <div className='lg-app-name'>chekkit</div>
        <div className='lg-line'>Create a community</div>
        <form onSubmit={handleSubmit}>
          <div className='lg-errors'>
            {errors?.map((error, ind) => (
              <div key={ind}>{error.split(':')[1]}</div>
            ))}
          </div>
          <div>
            <label htmlFor='community name' />
            <div className='lg-title-row'>
              <div className='lg-title-input'>
                <input type='text'
                  className='lg-title-field'
                  placeholder='Community name *'
                  required={true}
                  name='comm_name'
                  onChange={updateCommName}
                  value={comm_name} />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='comm_img' />
            <div className='lg-title-row'>
              <div className='lg-title-input'>
                <input type='text'
                  className='lg-title-field'
                  placeholder='Community img url *'
                  required={true}
                  name='comm_img'
                  onChange={updateCommImg}
                  value={comm_img}></input>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='about' />
            <div className='lg-title-row'>
              <div className='lg-title-input'>
                <input
                  className='lg-title-field'
                  placeholder='Community description *'
                  type='text'
                  required={true}
                  name='about'
                  onChange={updateAbout}
                  value={about}
                ></input>
              </div>
            </div>
          </div>
          <div className='lg-button-container'>
            <button className='lg-post-button' type='submit' disabled={!comm_name || !comm_img || !about}>Create Community</button>
          </div>
          <div className='su-bottom'>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCommForm;
