import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePost, getPosts, editPost } from "../../store/post";


const UpdatePostForm = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const postsObj = useSelector(state => state.post)
    const singlePost = postsObj[id];
    const user = useSelector(state => state.session.user);
    const [title, setTitle] = useState(singlePost?.title || '');
    const [img_url, setImgUrl] = useState(singlePost?.img_url || '');
    const [description, setDescription] = useState(singlePost?.description || '');

    useEffect(() => {
        const validationErrors = [];
        setErrors(validationErrors);
    }, [title, img_url, description])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { description, img_url, id, title, user_id: user.id };
        const response = await dispatch(editPost(post));
        if (response.errors) {
            setErrors(response.errors)
        } else {
            setShowModal(false);
        }
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    useEffect(() => {
        if (singlePost) {
            setDescription(singlePost?.description)
            setImgUrl(singlePost?.img_url);
            setTitle(singlePost?.title)
        }
    }, [postsObj]);

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <div className='su-page-container'>
            <div className='su-container'>
            <div className='upf-title'>Change your mind?</div>
                <form onSubmit={handleSubmit}>
                    <div className="lg-errors">
                            {errors?.map((error, i) => (
                                <div key={i}>{error.split(':')[1]}</div>
                            ))}
                        </div>
                        <div className='lg-title-row'>
                            <div className='lg-title-input'>
                                <input
                                    className="lg-title-field"
                                    type="text"
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    placeholder="Title"
                                    name="title"
                                />
                            </div>
                        </div>

                        <div className='lg-title-row'>
                            <div className='lg-title-input'>
                                <input
                                    className="lg-title-field"
                                    type="text"
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    placeholder="Description (optional)"
                                    name="description"
                                />
                            </div>
                        </div>

                        <div className='lg-title-row'>
                            <div className='lg-title-input'>
                                <input
                                    className="lg-title-field"
                                    type="text"
                                    required
                                    onChange={(e) => setImgUrl(e.target.value)}
                                    value={img_url}
                                    placeholder="Image URL"
                                    name="img_url"
                                />
                            </div>
                        </div>
                        <div className='su-bottom-2'></div>
                        <div className="">
                                <div className="lg-button-container">
                                    <button type="submit" onClick={handleSubmit} className="lg-post-button"
                                    disabled={errors?.length > 0}>Edit post</button>
                                </div>
                                <div className='su-bottom-2'></div>
                                <div className="lg-button-container">
                                    <button className="lg-post-button" type="submit" onClick={handleCancel}>Cancel</button>
                                </div>
                        </div>
                        <div className='su-bottom'></div>
                </form>
            </div>
        </div>
    );
}

export default UpdatePostForm;
