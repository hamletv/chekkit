import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './AllComms.css'


const AllCommunities = () => {
    const allComms = useSelector(state => Object.values(state.community))
    console.log('ALL COMMS: ', allComms)
    return (
        <div>
            <div className="ac-list-container">
                <div className="ac-hidden-1"></div>
                <div className="ac-container-1">
                    <div className="ac-banner-container">
                        <div className="ac-bnr-container-1">
                            <h1 className="ac-bnr-headline">Chekkit's Top Communities</h1>
                            <span className="ac-bnr-span">Browse Chekkit's communities and posts.</span>
                        </div>
                        <div className="ac-hidden-2"></div>
                    </div>
                    <div className="ac-31N">
                        <div className="ac-left-panel">
                            <div className="acl-container">
                                <div className="acl-1Le">
                                    <div className="acl-3RP">
                                        <div className="acl-1xE">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ac-main-panel-10VBB">
                            <div className="ac-3GP">
                                <div className="ac-HDn">
                                    <h2 className="ac-h2">Chekkit's Top Communities</h2>
                                </div>
                                <ol className="ac-ol">
                                    {allComms?.map((comm, i) => (
                                        <li className="ac-community">
                                            <Link className="ac-comm">
                                                <div className="ac-comm-left">
                                                    <span className="ac-number">{i+1}</span>
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
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AllCommunities;
