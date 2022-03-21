import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdatePostForm from './UpdatePostForm';

function EditPostModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdatePostForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}


export default EditPostModal;
