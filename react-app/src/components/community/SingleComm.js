import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import CreatePostBar from "./CreatePostBar";
// import TrendingBar from "./TrendingBar";
// import './Posts.css'

const SingleCommunity = () => {
    const { id } = useParams();
    const allPosts = useSelector(state => Object.values(state.post));
    // const allComms = useSelector(state => Object.values(state.community));
    const posts = allPosts.filter(post => post.community_id === +id).reverse();
    console.log('VALID POSTS: ', posts)

    return ( null );
}



export default SingleCommunity;
