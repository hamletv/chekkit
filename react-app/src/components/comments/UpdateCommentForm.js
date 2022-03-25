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
        <div >
            <div className="">
            {errors && (<div>
                {errors?.map((error, i) => (
                    <p key={i}>{error}</p>
                                        ))}
                </div>)}
            </div>
            <form onSubmit={handleSubmit} className="">
                <input
                className=""
                type="text"
                required
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                name="comment"
                />
                <div className="sp-post-container">
                    <div className="button-bar">
                        <button type="submit" onClick={(e) => handleSubmit} className="post-button">Edit comment</button>

                        <button className="w-post-button" type="submit" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default UpdateCommentForm;
