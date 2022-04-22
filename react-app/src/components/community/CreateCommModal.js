import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateCommForm from './CreateComm';


function CreateCommModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className='nav-signup' onClick={() => setShowModal(true)}>
                <i className="fa-solid fa-plus nav-icon"></i>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateCommForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}


export default CreateCommModal;
