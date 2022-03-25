import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "../../store/post";
import './CreatePost.css'

const CreatePost = () => {
    const [img_url, setImg_Url] = useState('');
    const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);

    useEffect(() => {
        const validationErrors = [];
        setErrors(validationErrors);
    }, [title, img_url])

    const reset = () => {
        setTitle('');
        setImg_Url('');
        // setDescription('')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_post = {
            user_id,
            title,
            // description,
            img_url
        };
        const response = await dispatch(addPost(new_post));
        if (response.errors) {
            setErrors(response.errors)
        } else {
            reset();
            history.push('/posts');
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/posts');
    }

    return (
        <div className="container">
            <div className="content-container">
                <div className="top-line-container">
                    <div className="top-line-content">Create a post</div>
                </div>
                <div className="create-container">
                    <div className="button-row">
                    <div className="buttons-container">
                            <button className="new-post-button"><i className="fa-solid fa-bars"></i>Post</button>
                            <button className="new-post-button"><i className="fa-solid fa-image"></i>Images & Video</button>
                            <button className="new-post-button"><i className="fa-solid fa-link"></i>Link</button>
                            <button className="new-post-button">Blank</button>
                            <button className="new-post-button">Blank</button>
                        </div>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="title-row">
                                <div className="title-input">
                                    <input type='text' className="title-field" onChange={(e) => setTitle(e.target.value)} value={title} required placeholder='Title (required)'></input>
                                </div>
                            </div>
                            <div className="title-row">
                                <div className="title-input">
                                    <input type='textarea' className="title-field" onChange={(e) => setImg_Url(e.target.value)} value={img_url} required placeholder='Image URL (Required .jpg, .jpeg, .gif, .png format only)'></input>
                                </div>
                            </div>
                            <div className="title-row">
                                <div className="title-input">
                                    {errors && (<div>
                                        {errors?.map((error, i) => (
                                            <p key={i}>{error}</p>
                                        ))}
                                    </div>)}
                                    {/* <input type='text' className="content-field" onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Text (optional)'></input> */}
                                </div>
                            </div>
                    <hr className="divider-line"></hr>
                    <div className="bottom-row">
                        <div className="button-bar">
                            <div className="button-container"><button className="post-button" type="submit" disabled={errors?.length > 0} onSubmit={handleSubmit}>Post</button></div>

                            <div className="button-container"><button className="post-button" role="button" type="button" onClick={handleCancel}>Cancel</button></div>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CreatePost;
