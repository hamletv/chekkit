import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editComment } from "../../store/comment";


const UpdateCommentForm = ({ comm, setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const commentsObj = useSelector(state => state.comment)
    const user = useSelector(state => state.session.user);
    const [comment, setComment] = useState(comm?.comment || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cmnt = { comment, user_id: user.id, post_id: comment.post_id, id: comm.id };
        await dispatch(editComment(cmnt));
        setShowModal(false);
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
                {/* <ul>
                    {errors.map(error => (<li key={error}>{error}</li>))}
                </ul> */}
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
