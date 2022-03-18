import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "../../store/post";


const MediaPost = () => {
    const [img_url, setImg_Url] = useState('');
    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);

    useEffect(() => {
        const validationErrors = [];

        if(title.length < 5) validationErrors.push('Please provide a more descriptive title.')
        if(title.length > 300) validationErrors.push('Your title is longer than the character limit')
        if(img_url.length < 5) validationErrors.push('Please enter a valid url.')
        if(!img_url.includes('http')) validationErrors.push('Your url must include http or https prefix.');
        setErrors(validationErrors);
    }, [title, img_url])

    const reset = () => {
        setTitle('');
        setImg_Url('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_post = {
            user_id,
            title,
            img_url
        };
        await dispatch(addPost(new_post));
        reset();
        history.push('/')
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/');
    }
    return (
        <div className="page-container">
            <div className="create-post-container">
                <div className="create-top-line">
                    Create a post
                    <hr>-----</hr>
                </div>
            <div>
                <div className="form-error"></div>
                <form onSubmit={handleSubmit} className='form-style'>
                    <ul>
                        <li>
                            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}placeholder='Title' className="field-style field-full align none" required />
                        </li>

                        <li>
                            <input type='text' onChange={(e) => setImg_Url(e.target.value)} value={img_url} placeholder='Url' className="field-style field-full align none" required />
                        </li>
                    </ul>
                    <div>
                        <ul>
                            <li>
                                <button className="cancel-button" type="submit" onClick={handleCancel}>Cancel</button>
                            </li>
                            <li>
                                <button className="post-button" type="submit" disabled={errors.length > 0}>Post</button>
                            </li>
                        </ul>
                    </div>

                </form>
            </div>
            </div>
        </div>
     );
}



export default MediaPost;
