import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePost, getPosts, editPost } from "../../store/post";


const UpdatePostForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const singlePost = useSelector(state => state.post[id]);
    const [title, setTitle] = useState(singlePost?.title || '');
    const [img_url, setImgUrl] = useState(singlePost?.img_url || '');
    const [description, setDescription] = useState(singlePost?.description || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { description, img_url, id, title };
        await dispatch(editPost(post));
        history.push(`/posts/${post.id}`)
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeImage(id))
        return history.push('/');
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        return history.push(`/posts/${posts.id}`);
    };

    useEffect(() => {
        if(singlePost) {
            setDescription(singlePost.description)
            setImgUrl(singlePost.img_url);
            setTitle(singlePost.title)
        }
    }, []);

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    return (  );
}

export default UpdatePostForm;
