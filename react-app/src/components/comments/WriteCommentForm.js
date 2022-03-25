import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/comment";
import { useHistory } from "react-router-dom";

const WriteCommentForm = ({ singlePost, setShowModal }) => {
    const user_id = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const reset = () => {
        setComment('');
    }

    useEffect(() => {
        const validationErrors = [];
        setErrors(validationErrors)
    },[comment])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            comment,
            post_id: singlePost.id,
            user_id,
        };
        const response = await dispatch(addComment(newComment));
        if (response.errors){
            setErrors(response.errors)
        } else {
            reset();
            // setShowModal(false);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/posts')
    }
    return (
        <div>
            <div className="title-input">
                {errors && (<div>
                    {errors?.map((error, i) => (
                        <p key={i}>{error.split(':')[1]}</p>
                    ))}
                </div>)}
            </div>
            <form onSubmit={handleSubmit}>
                <input className="title-field" type="textarea" onChange={(e) => setComment(e.target.value)} value={comment} placeholder='What are your thoughts?' name="comment"></input>
                <div className="sp-post-container">
                    <div className="button-bar">
                        <button className="w-post-button" onClick={handleSubmit}>Comment</button>
                        <button className="w-post-button" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default WriteCommentForm;
