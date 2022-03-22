import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteComment, editComment } from "../../store/comment";
import { deletePost } from "../../store/post";
import EditPostModal from "./EditPostModal";
import WriteCommentForm from "../comments/WriteCommentForm";
import UpdateCommentForm from "../comments/UpdateCommentForm";

const SinglePost = () => {
    const [loadComment, setLoadComment] = useState(false);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const singlePost = useSelector(state => state.post[id])
    const commentsObj = useSelector(state => Object.values(state.comment));
    const allComments = Object.values(commentsObj) // array of objs
    const comments = allComments.filter(comment => comment?.post_id === +id)

    const openComment = (e) => {
        e.preventDefault();
        setLoadComment(!loadComment);
    };

    const handleDeleteComment = async (id) => {
        await dispatch(deleteComment(id))
    }

    const handleDeletePost = async (id) => {
        await dispatch(deletePost(singlePost.id))
        history.push('/');
    };

    return (
        <div>
            <div className="post-container">
                <div className="vote-container">
                    <div>upvote</div>
                    <div>00</div>
                    <div>downvote</div>
                </div>
                <div className="post">
                    <div className="user-content">
                    <p>Posted by: </p>
                    </div>
                </div>
                <div>
                    <h3 className="post-title">{singlePost?.title}</h3>
                </div>
                <div>
                    <p className="text-content">{singlePost?.description}</p>
                </div>
                <div>
                    <img src={singlePost?.img_url} />
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        {user.id === singlePost?.user_id && (<EditPostModal/>)}
                    </li>
                    <li>
                        <button onClick={(e) => history.push('/')}>Back</button>
                    </li>
                    <li>
                        {user.id === singlePost?.user_id &&
                        (<button onClick={handleDeletePost}>Delete</button>
                        )
                        }
                    </li>
                </ul>
            </div>
            <div className="comment-container">
                <WriteCommentForm singlePost={singlePost} />
            </div>
            <div>
                {comments?.map((comment, id) => (
                    <div>
                        {comment.comment}
                        <div>{user.id === singlePost?.user_id && (<UpdateCommentForm comm={comment} id={id}/>)}
                        </div>
                        <div>{user.id === comment?.user_id &&
                            (<button onClick={() => handleDeleteComment(comment?.id)}>Delete</button>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default SinglePost;
