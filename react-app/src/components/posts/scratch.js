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
            {/* <Link to={`/posts/${post.id}`} key={post.id}> */}
            <div className="post">
                <div className="user-content">
                    <div className="user-image">
                        {/* <a className="user-image-1"></a> */}
                    </div>
                </div>
                <div className="posted-by">
                    <div className="posted-bar">
                        <span className="posted-span">Posted by</span>
                        <div className="username">
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
            <div className="image-container">
                <div className="image-container-2">
                    <img className='image' src={post?.img_url} />
                </div>
            </div>
            <div>
                <p className="text-content">{singlePost?.description}</p>
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
            {/* </Link> */}
        </div>
        {/* ========== Comments ========== */}
        <div>
            <ul>
                <li>
                    {user.id === singlePost?.user_id && (<EditPostModal />)}
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
