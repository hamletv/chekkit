import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editComment } from "../../store/comment";


const UpdateCommentForm = ({ comm, setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    // const commentsObj = useSelector(state => state.comment)
    const user = useSelector(state => state.session.user);
    const [comment, setComment] = useState(comm?.comment || '');

    useEffect(() => {
        const validationErrors = [];
        setErrors(validationErrors);
    }, [comment])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cmnt = { comment, user_id: user.id, post_id: comment.post_id, id: comm.id };
        const response = await dispatch(editComment(cmnt));
        if (response.errors) {
            setErrors(response.errors)
        } else {
            setShowModal(false);
        }
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    useEffect(() => {
        if(comm) {
            setComment(comm?.comment);
        }
    }, [comm]);

    return (
        <div className='su-page-container'>
            <div className='su-container'>
            <div className='upf-title'>Change your mind?</div>
            <form onSubmit={handleSubmit} className="">
                <div className="lg-errors">
                    {errors?.map((error, i) => (
                        <div key={i}>{error.split(':')[1]}</div>
                    ))}
                </div>
                <div className='lg-title-row'>
                    <div className='lg-title-input'>
                <input
                className="lg-title-field"
                type="text"
                required
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                name="comment"
                />
                </div>
                </div>
                <div className="sp-post-container">
                    <div className="ec-button-bar">
                        <button type="submit" onClick={(e) => handleSubmit} className="post-button">Edit</button>

                        <button className="w-post-button" type="submit" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
     );
}

export default UpdateCommentForm;
