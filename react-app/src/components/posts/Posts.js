import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllPosts = () => {
    const posts = useSelector(state => Object.values(state.post))
    console.log('SINGLE POST: ', posts[1]);
    return (
        <div className="all-posts-container">
            {posts?.map(post => (
                <div className="post-container" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                        {post.description}
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default AllPosts;
