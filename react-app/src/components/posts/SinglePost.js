import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteComment, editComment } from "../../store/comment";
import { deletePost } from "../../store/post";
import EditPostModal from "./EditPostModal";
import WriteCommentForm from "../comments/WriteCommentForm";
import UpdateCommentForm from "../comments/UpdateCommentForm";
import EditCommentModal from "../comments/EditCommentModal";

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
                    <button className="vote-button"></button>
                    <span className="post-span"><i className="fa-thin fa-square-arrow-up"></i></span>
                    <div className="num-vote"></div> {/* vote number here */}
                    <button className="vote-button">
                        <span className="post-span">
                            <i className="fa-thin fa-square-arrow-down"></i>
                        </span>
                    </button>
                </div>
                <div className="content">
                    <div className="user-content">
                        <div className="post">
                            <div className="user-content">
                                <div className="user-image">
                                    {/* <a className="user-image-1"></a> */}
                                </div>
                                {/* <a className="user-image-1"></a> */}
                            </div>
                        </div>
                        <div className="posted-by">
                            <div className="posted-bar">
                                <span className="posted-span">Posted by</span><div className="username">
                                    <a className="user-link">{singlePost?.username}</a>
                                    <a className="posted-time">{singlePost?.created_at}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="title-container">
                        <div className="title-line">
                            <div className="post-title">
                                <h3 className="title">{singlePost?.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-content">{singlePost?.description}</p>
                </div>
                {/* <div>
                    <img src={singlePost?.img_url} />
                </div> */}
                <div className="image-container">
                    <div className="image-container-2">
                        <img className='image' src={singlePost?.img_url} />
                    </div>
                </div>
                <div>
                    <p className="text-content">{singlePost?.description}</p>
                </div>
            <div className="edit-post">
                {/* <ul> */}
                    {/* <li> */}
                        {user.id === singlePost?.user_id && (<EditPostModal />)}
                    {/* </li> */}
                    {/* <li> */}
                        <button onClick={(e) => history.push('/')}>Back</button>
                    {/* </li> */}
                    {/* <li> */}
                        {user.id === singlePost?.user_id &&
                            (<button onClick={handleDeletePost}>Delete</button>
                            )
                        }
                    {/* </li> */}
                {/* </ul> */}
            </div>
            <div className="comment-container">
                <WriteCommentForm singlePost={singlePost} />
            </div>
            <div>
                {comments?.map((comment, id) => (
                    <div>
                        {comment.comment}
                        <div>{user.id === singlePost?.user_id && (<EditCommentModal comm={comment} />)}
                        </div>
                        <div>{user.id === comment?.user_id &&
                            (<button onClick={() => handleDeleteComment(comment?.id)}>Delete</button>)}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}


export default SinglePost;
