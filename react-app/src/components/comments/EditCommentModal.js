import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateCommentForm from './UpdateCommentForm';

function EditCommentModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateCommentForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}


export default EditCommentModal;
