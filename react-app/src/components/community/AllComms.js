import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './AllComms.css'


const AllCommunities = () => {
    const allComms = useSelector(state => Object.values(state.community));
    const allPosts = useSelector(state => Object.values(state.post));
    const posts = allPosts.reverse();
    console.log('ALL COMMS: ', allComms)
    return (
        <div>
            <div className="ac-all-container _1nx">
                <div>
                    <div className="ac-list-container qYj">
                        <div className="ac-hidden-1 2wx"></div>
                        <div className="ac-container-1 3oz">
                            <div className="ac-banner-container 1xt">
                                <div className="ac-bnr-container-1 3cH">
                                    <h1 className="ac-bnr-headline 2N_">Chekkit's Top Communities</h1>
                                    <span className="ac-bnr-span">Browse Chekkit's communities and posts.
                                    </span>
                                </div>
                            </div>
                            <div className="ac-hidden-2"></div>
                            <div className="ac-main 31N">
                                <div className="ac-left-panel 2TB">
                                    <div className="acl-container 1FU">
                                        <div className="acl-1Le">
                                            <div className="acl-3RP">
                                                <div className="acl-categories 1xE">
                                                    <h2 className="acl-categories">Recent Posts</h2>
                                                </div>
                                                <div>
                                                    <ul className="acl-ul 2To">
                                                        {posts.map(post => (
                                                            <li className="acl-rpli">
                                                                <Link to={`/posts/${post.id}`} className="acl-anchor">
                                                                    {post.title.slice(0, 25)}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ac-main-panel 10VBB">
                                    <div className="ac-main-inner 3GP">
                                        <div className="ac-headline-container HDn">
                                            <h2><span className="ac-h2">Chekkit's Top Communities
                                                </span>
                                            </h2>
                                        </div>
                                        <ol className="ac-ol">
                                            {allComms?.map((comm, i) => (
                                                <li className="ac-community">
                                                    <Link className="ac-comm">
                                                        <div className="ac-comm-left 2NS">
                                                            <span className="ac-number">{i + 1}</span>
                                                            <i className="fa-thin fa-square-arrow-up ac-arrow"></i>
                                                            <img className="ac-img" src={comm.comm_img} />
                                                            <span className="ac-img-span">
                                                                <div className="ac-title-container">
                                                                    <span className="ac-title-span">{`c/${comm.comm_name}`}</span>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <div className="yPM">
                                                        <button className="_2iu">
                                                            <span>Join</span>
                                                        </button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            <div className="_3Kd">
                            <div className="_1FU ac-sidepanel">
                                <div className="_1G4">
                                    <div className="_3RP">
                                        <div className="_2-a">
                                            <h2 className="_3t">Chekkit's Top Communities</h2>
                                        </div>

                                        {/* list */}

                                        <ol>
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
                                        </div>

                                        {/* list end */}

                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCommunities;
