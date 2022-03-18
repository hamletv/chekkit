import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Route, useHistory, useParams } from "react-router-dom";

const SinglePost = ({ post }) => {
    const [loadComment, setLoadComment] = useState(false);
    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => Object.values(state.comment))
    return (  );
}


export default SinglePost;
