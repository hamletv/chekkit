import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import WriteCommentForm from './WriteCommentForm';


function CommentFormModal() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button onClick={() => setShowModal(true)} className='active nav-right'>Comment</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <WriteCommentForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}


export default CommentFormModal;
