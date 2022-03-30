import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const CreatePostBar = () => {
    const user = useSelector(state => state.session.user);
    console.log('THE USER: ', user);

    return (
        <div className="_2jJN">
            <a className="_2E_z" href="#">
                <div className="efd">
                    <div className="_1cy">
                        <div className="_2_Qq"></div>
                        <div className="_1XJ">
                            <img className="Scrr" src={user?.profile_img}/>
                        </div>
                    </div>
                </div>
            </a>
            <input className="zgT" placeholder="Create Post"/>
            <a className="_27e" href="#"><i className="fa-solid fa-image"></i></a>
            <a className="_27e" href="#"><i className="fa-solid fa-link"></i></a>
        </div>
    );
}

export default CreatePostBar;
