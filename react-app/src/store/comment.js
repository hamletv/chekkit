const GET_COMMENTS = 'comment/GET_COMMENTS'
const ADD_COMMENT = 'comment/ADD_COMMENT'
const EDIT_COMMENT = 'comment/EDIT_COMMENT'
const DELETE_COMMENT = 'comment/DELETE_COMMENT'

/* ----- ACTION CREATORS ------ */
export const getCommentsAC = (comments) => {
    return {
        type: GET_COMMENTS,
        comments
    };
};

export const addCommentAC = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    };
};

export const editCommentAC = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    };
};

export const removeCommentAC = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    };
};

/* ----- THUNK ------ */
export const getComments = (postId) => async(dispatch) => {
    const response = await fetch(`/api/comments/`);
    if(response.ok){
        const comments = await response.json();
        dispatch(getCommentsAC(comments))
    };
    return response;
};

export const addComment = ({ userId, postId, comment }) => async(dispatch) => {
    const response = await fetch('/api/comments/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, postId, comment})
    });
    if(response.ok){
        const comment = await response.json();
        dispatch(addCommentAC(comment))
    };
    return response;
};

export const editComment = (comment) => async(dispatch) => {
    const response = await fetch(`/api/comments/${comment.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    });
    if(response.ok) {
        const comment = await response.json();
        dispatch(editCommentAC(comment));
    }
    return response;
};

export const deleteComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE' });
    const data = await response.json();
    if(data) {
        dispatch(removeCommentAC(id))
    }
    return response;
};


/* ----- REDUCER ------ */
const commentReducer = (state = {}, action)  => {
    let newState;
    switch (action.type) {
        case GET_COMMENTS: {
            const newState = { ...state };
            // console.log('THE COMMENTS: ', action.comments.comments)
            action.comments.comments.forEach(comment => newState[comment.id] = comment);
            return newState;
        }
        case ADD_COMMENT: {
            newState = { ...state, [action.comment.id]: { ...action.comment }
            }
            return newState;
        }
        case EDIT_COMMENT: {
            newState = { ...state, [action.comment.id]: action.comment };
            return newState;
        }
        case DELETE_COMMENT: {
            newState = { ...state };
            delete newState[action.commentId];
            return newState;
        }
      default:
        return state;
    }
};


export default commentReducer;
