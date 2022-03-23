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
    console.log('THE POSTS ', posts, user);
    return (
        <div className="all-posts-container">
            {posts?.map(post => (
                <div className="post-container">
                    <div className="vote-container">
                        <div><i class="fa-thin fa-square-arrow-up"></i></div>
                        <div>--</div>
                        <div><i class="fa-thin fa-square-arrow-down"></i></div>
                    </div>
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <div className="post">
                            <div className="user-content">
                            <p>Posted by: </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="post-title">{post?.title}</h3>
                        </div>
                        <div>
                            <p className="text-content">{post?.description}</p>
                        </div>
                        <div>
                            <img src={post?.img_url} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default AllPosts;
