import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CreatePostBar from '../posts/CreatePostBar'
import TrendingBar from "../posts/TrendingBar";
import '../posts/Posts.css'

const SingleCommunity = () => {
    const { id } = useParams();
    const allPosts = useSelector(state => Object.values(state.post));
    const posts = allPosts.filter(post => post.community_id === +id).reverse();

    return (
        <div className="all-posts-container">
            <div className="qYj">
                <div className="_3oz">
                    <div className="empty"></div>
                    <div className="panels-container">
                        <div className="_10V">
                        <div>
                            <CreatePostBar />
                        </div>
                        <div>
                            <TrendingBar />
                        </div>
                        {posts?.map(post => (
                            <div className="post-container" key={post.id}>
                                <div></div>
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
                                    <Link to={`/posts/${post.id}`} key={post.id}>
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
                                                        <a className="user-link">{post.username}</a>
                                                        <a className="posted-time">{post?.created_at.slice(0, 16)}</a>
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
                                            <p className="text-content desc">{post?.description}</p>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        ))}
                        </div>

                        {/* side panel 1 */}

                        {/* <div className="_3Kd">
                            <div className="_1FU">
                                <div className="_1G4">
                                    <div className="_3RP">
                                        <div className="_2-a">
                                            <h2 className="_3t">Chekkit's Top Communities</h2>
                                        </div> */}

                                        {/* list */}

                                        {/* <ol>
                                            {allComms.map((comm, i) => (
                                                <li className="_267">
                                                <a className="_2AR">
                                                    <div className="_2NS">
                                                        <span className="_2B-">{i+1}</span><i className="fa-solid fa-angle-up"></i>
                                                        <img src={comm?.comm_img} className="_34C"/>
                                                        <span className="_1XU">
                                                            <span className="_3A9">c/{comm?.comm_name}</span>
                                                        </span>
                                                    </div>
                                                </a>
                                                <div className="yPM">
                                                    <button className="_2iu">
                                                        <span>Join</span>
                                                    </button>
                                                </div>
                                            </li>
                                                ))}
                                        </ol>
                                        <div className="lg-view-all">
                                            <Link to='/communities' className="view-all">View All</Link>
                                        </div> */}

                                        {/* list end */}

                                    {/* </div>
                                </div>
                            </div>
                        </div> */}
                        {/* side panel 1 end */}
                    </div>
                </div>
            </div>
        </div>
     );
}



export default SingleCommunity;
