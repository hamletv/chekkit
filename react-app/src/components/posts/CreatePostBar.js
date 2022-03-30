import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


const CreatePostBar = () => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push('/new');
    }

    return (
        <div className="cpb-container">
            <a className="cpb-img-container-1" href="#">
                <div className="cpb-img-container-2">
                    <div className="cpb-img-container-3">
                        <div className="cpb-img-container-4"></div>
                        <div className="cpb-img-container-5">
                            <img className="cpb-image" src={user?.profile_img}/>
                        </div>
                    </div>
                </div>
            </a>
            <input className="cpb-input" placeholder="Create Post" onClick={handleClick}/>
            <a className="cpb-icons" href="#"><i className="fa-solid fa-image"></i></a>
            <a className="cpb-icons" href="#"><i className="fa-solid fa-link"></i></a>
        </div>
    );
}

export default CreatePostBar;
