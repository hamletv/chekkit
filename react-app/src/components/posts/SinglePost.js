import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteComment } from "../../store/comment";
import { deletePost } from "../../store/post";

const SinglePost = () => {
    const [loadComment, setLoadComment] = useState(false);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    // const singlePost = useSelector(state => Object.values(state.post))
    const singlePost = useSelector(state => state.post[id])
    const comments = useSelector(state => Object.values(state.comment))
    console.log('SINGLE POST', singlePost)

    const openComment = (e) => {
        e.preventDefault();
        setLoadComment(!loadComment);
    };

    const deleteComment = (e, id) => {
        e.preventDefault();
        dispatch(deleteComment(id))
    };

    const handleDeletePost = async (e) => {
        e.preventDefault();
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
                        {user.id === singlePost?.user_id &&
                        (<button onClick={(e) => history.push('/')}>Edit</button>
                        )
                        }
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
        </div>
    )
}


export default SinglePost;
