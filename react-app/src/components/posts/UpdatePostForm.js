import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePost, getPosts, editPost } from "../../store/post";


const UpdatePostForm = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const postsObj = useSelector(state => state.post)
    const singlePost = postsObj[id];
    const user = useSelector(state => state.session.user);
    const [title, setTitle] = useState(singlePost?.title || '');
    const [img_url, setImgUrl] = useState(singlePost?.img_url || '');
    const [description, setDescription] = useState(singlePost?.description || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { description, img_url, id, title, user_id: user.id };
        await dispatch(editPost(post));
        setShowModal(false)
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deletePost(id))
        return history.push('/');
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    useEffect(() => {
        if(singlePost) {
            setDescription(singlePost?.description)
            setImgUrl(singlePost?.img_url);
            setTitle(singlePost?.title)
        }
    }, [postsObj]);

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <div >
            <div className="">
                {/* <ul>
                    {errors.map(error => (<li key={error}>{error}</li>))}
                </ul> */}
            </div>
            <form onSubmit={handleSubmit} className="">
                <input
                className=""
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Title"
                name="title"
                />
                <input
                className=""
                type="text"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
                name="description"
                />
                <input
                className=""
                type="text"
                required
                onChange={(e) => setImgUrl(e.target.value)}
                value={img_url}
                placeholder="Image URL"
                name="img_url"
                />
                <div className="">
                    <ul>
                        <li>
                            <button type="submit" onClick={handleSubmit} className="">Edit post</button>
                        </li>
                        <li>
                            <button className="" type="submit" onClick={handleDelete}>Delete post</button>
                        </li>
                        <li>
                            <button className="" type="submit" onClick={handleCancel}>Cancel</button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
     );
}

export default UpdatePostForm;
