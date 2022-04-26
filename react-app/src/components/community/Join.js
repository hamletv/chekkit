import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComms } from "../../store/community";
import { addUsertoCommunity } from "../../store/session";
import { deleteUserFromComm } from "../../store/session";

const JoinCommunity = ({ comm }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const member = comm.users.filter(user => user.user_id === sessionUser.id)

    const joinCommunity = async (e) => {
        e.preventDefault();
        const newMember = { user_id: sessionUser.id, community_id: comm.id }
        await dispatch(addUsertoCommunity(newMember));
    }

    const leaveCommunity = async (e) => {
        e.preventDefault();
        const payload = { user_id: sessionUser.id, community_id: comm.id }
        await dispatch(deleteUserFromComm(payload));
    }

    return (
        <button className="_2iu">
            {member.length > 0 ?
                (<span onClick={leaveCommunity}>Leave</span>) :
                (<spa onClick={joinCommunity}>Join</spa>)
            }
        </button>
    );
}

export default JoinCommunity;
