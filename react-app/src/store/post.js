const GET_POSTS = 'posts/GET_POSTS'
const ADD_POST = 'posts/ADD_POST'
const EDIT_POST = 'posts/EDIT_POST'
const DELETE_POST = 'posts/DELETE_POST'

/* ----- ACTIONS ------ */
export const getPostsAC = (posts) => {
    return {
        type: GET_POSTS,
        posts
    };
};

export const addPostAC = (post) => {
    return {
        type: ADD_POST,
        post
    };
};

export const editPostAC = (post, imgUrl, title, description) => {
    return {
        type: EDIT_POST,
        post, imgUrl, title, description
    };
};

export const removePostAC = (postId) => {
    return {
        type: DELETE_POST,
        postId
    };
};

/* ----- THUNK ------ */
export const getPosts = () => async(dispatch) => {
    const response = await fetch('/api/posts/');
    if(response.ok){
        const posts = await response.json();
        dispatch(getPostsAC(posts))
    };
    return response;
};

export const addPost = (payload) => async(dispatch) => {
    const response = await fetch('/api/posts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if(response.ok){
        const post = await response.json();
        dispatch(addPostAC(post))
    };
    return response;
};

export const editPost = (id, formInfo) => async(dispatch) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formInfo)
    });
    if(response.ok){
        const post = await response.json();
        dispatch(editPostAC(post))
    };
    return response;
};

export const deletePost = (id) => async(dispatch) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE' });
    const data = await response.json();
    dispatch(deleteImageAC(id))
    return response;
};

/* ----- REDUCER ------ */
const postReducer = (state = {}, action) => {
    let newState;
    switch(action.type){
        case GET_POSTS: {
            const newState = { ...state }
            action.posts.map(post => newState[post.id] = post);
            return newState
        }

        case ADD_POST: {
            const newState = { ...state, [action.post.id]: { ...action.post }
            }
            return newState;
        }

        case EDIT_POST: {
            const newState = { ...state, [action.post.id]: action.post }
            return newState;
        }

        case DELETE_POST: {
            const newState = { ...state }
            delete newState[action.postId]
            return newState;
        }
        default:
            return state;
    };
};


export default postReducer;
