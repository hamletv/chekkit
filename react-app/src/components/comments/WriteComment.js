import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/comment";
import { useHistory } from "react-router-dom";

const WriteComment = ({ singlePost }) => {
    const user_id = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const history = useHistory();

    const reset = () => {
        setComment('');
    }

    useEffect(() => {
        const validationErrors = [];
        if(comment.length === 0) validationErrors.push('Please enter your comment.');
        if(comment.length > 1000) validationErrors.push('Enter a brief comment.');
        setErrors(validationErrors)

    },[comment])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            comment,
            post_id,
            user_id,
        };
        dispatch(addComment(newComment));
        reset();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/')
    }
    return (  );
}

export default WriteComment;{ singlePost }
