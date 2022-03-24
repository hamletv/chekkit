import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateCommentForm from './UpdateCommentForm';

function EditCommentModal({comm}) {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div className='sp-post-container'>
                <div className='button-bar'>
                <button className='post-button' onClick={() => setShowModal(true)}>Edit</button>
                </div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateCommentForm setShowModal={setShowModal} comm={comm}/>
                </Modal>
            )}
        </>
    );
}


export default EditCommentModal;
