import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';


function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button onClick={() => setShowModal(true)} className='active nav-right'>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}


export default LoginFormModal;
