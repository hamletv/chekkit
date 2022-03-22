import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateCommentForm from './UpdateCommentForm';

function EditCommentModal({comm}) {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateCommentForm setShowModal={setShowModal} comm={comm}/>
                </Modal>
            )}
        </>
    );
}


export default EditCommentModal;
