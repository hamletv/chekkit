import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Posts.css'
import SinglePost from "./SinglePost";

const AllPosts = () => {
    const allPosts = useSelector(state => Object.values(state.post))
    const posts = allPosts.reverse();
    const comments = useSelector(state => Object.values(state.comment))
    const user_id = useSelector(state => state.session.user?.id)
    const user = useSelector(state => state.session.user?.username)
    console.log('THE POSTS ', user);
    return (
        <div className="all-posts-container">
            {posts?.map(post => (
                <div className="post-container">
                    <div></div>
                        <div className="vote-container">
                            <button className="vote-button"></button>
                                <span className="post-span"><i className="fa-thin fa-square-arrow-up"></i></span>
                             <div className="num-vote"></div> {/* vote number here */}
                            <button className="vote-button">
                                <span className="post-span">
                                <i class="fa-thin fa-square-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                        <div className="content">
                            <Link to={`/posts/${post.id}`} key={post.id}>
                                <div className="post">
                                    <div className="user-content">
                                        <div className="user-image">
                                        <a className="user-image-1"></a>
                                        </div>
                                    </div>
                                    <div className="posted-by">
                                        <div className="posted-bar">
                                            <span className="posted-span">Posted by</span>
                                            <div className="username">
                                                <a className="user-link">{user}</a>
                                                <a className="posted-time">{post?.created_at}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title-container">
                                    <div className="title-line">
                                        <div className="post-title">
                                            <h3 className="title">{post?.title}
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
                                    <p className="text-content">{post?.description}</p>
                                </div>
                            </Link>
                        </div>

                </div>
            ))}
        </div>
     );
}

export default AllPosts;





// return (
//     <div className="all-posts-container">
//         {posts?.map(post => (
//             <div className="post-container">
//                 <div className="vote-container">
//                     <div><i class="fa-thin fa-square-arrow-up"></i></div>
//                     <div>--</div>
//                     <div><i class="fa-thin fa-square-arrow-down"></i></div>
//                 </div>
//                 <Link to={`/posts/${post.id}`} key={post.id}>
//                     <div className="post">
//                         <div className="user-content">
//                         <p>Posted by: </p>
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className="post-title">{post?.title}</h3>
//                     </div>
//                     <div>
//                         <p className="text-content">{post?.description}</p>
//                     </div>
//                     <div>
//                         <img src={post?.img_url} />
//                     </div>
//                 </Link>
//             </div>
//         ))}
//     </div>
//  );
