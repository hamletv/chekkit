import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


const TrendingBar = () => {
    const user = useSelector(state => state.session.user);

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push('/new');
    }

    return (
        <div className="cpb-container">
            <div className="icons-container">
                <div className="icons-container-2">
                    <button className="button-1">
                        <span className="span-class">
                        <i className="fa-solid fa-jet-fighter-up"></i>
                        </span>
                        <span className="text-span">Best</span>
                    </button>
                </div>
            </div>

            <div className="icons-container">
                <div className="icons-container-2">
                    <button className="button-2">
                        <span className="span-class">
                        <i className="fa-brands fa-hotjar"></i>
                        </span>
                        <span className="text-span">Hot</span>
                    </button>
                </div>
            </div>

            <div className="icons-container">
                <div className="icons-container-2">
                    <button className="button-2">
                        <span className="span-class">
                        <i className="fa-solid fa-certificate"></i>
                        </span>
                        <span className="text-span">New</span>
                    </button>
                </div>
            </div>

            <div className="icons-container">
                <div className="icons-container-2">
                    <button className="button-2">
                        <span className="span-class">
                        <i className="fa-solid fa-trophy"></i>
                        </span>
                        <span className="text-span">Top</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrendingBar;
