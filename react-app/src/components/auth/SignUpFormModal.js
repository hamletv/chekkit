import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';


function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className='nav-signup' onClick={() => setShowModal(true)}>Sign up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}


export default SignUpFormModal;
