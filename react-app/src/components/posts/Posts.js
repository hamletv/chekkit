import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Posts.css'

const AllPosts = () => {
    const posts = useSelector(state => Object.values(state.post))
    const user_id = useSelector(state => state.session.user?.id)
    // console.log('SINGLE POST AND USER: ', posts[1], user_id);
    return (
        <div className="all-posts-container">
            {posts?.map(post => (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <div className="post-container">
                        <div className="vote-container">
                            <div>upvote</div>
                            <div>0000</div>
                            <div>downvote</div>
                        </div>
                        <div className="post">
                            <div className="user-content">
                            <p>Posted by: </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="post-title">{post.title}</h3>
                        </div>
                        <div>
                            <p className="text-content">{post.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
     );
}

export default AllPosts;
