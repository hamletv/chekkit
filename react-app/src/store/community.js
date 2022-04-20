const GET_COMMS = 'community/GET_COMMS'
const ADD_COMM = 'community/ADD_COMM'
const EDIT_COMM = 'community/EDIT_COMM'
const DELETE_COMM = 'community/DELETE_COMM'

/* ----- ACTION CREATORS ------ */
export const getCommsAC = (comms) => {
    return {
        type: GET_COMMS,
        comms
    };
};

export const addCommAC = (comm) => {
    return {
        type: ADD_COMM,
        comm
    };
};

export const editCommAC = (comm_name, comm_img, about) => {
    return {
        type: EDIT_COMM,
        comm_name, comm_img, about
    };
};

export const removeCommAC = (commId) => {
    return {
        type: DELETE_COMM,
        commId
    };
};

/* ----- THUNK ------ */
export const getComms = () => async(dispatch) => {
    console.log('BEFORE FETCH')
    const response = await fetch('/api/communities/');
    console.log('AFTER FETCH', response)
    if(response.ok){
        const comms = await response.json();
        dispatch(getCommsAC(comms))
    };
    return response;
};

export const addComm = (payload) => async(dispatch) => {
    const response = await fetch('/api/communities/new-subchekkit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if(response.ok){
        const comm = await response.json();
        dispatch(addCommAC(comm))
        return comm;
    } else if(response.status < 500) {
        const data = await response.json();
        if(data.errors) {
            return data;
        }
    }
    return response;
};

export const editComm = ({ id, user_id, comm_name, comm_img, about }) => async(dispatch) => {
    const response = await fetch(`/api/communities/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id, comm_name, comm_img, about })
    });
    if(response.ok){
        const comm = await response.json();
        dispatch(editCommAC(comm));
        return comm;
    } else if(response.status < 500) {
        const data = await response.json();
        if(data.errors){
            return data;
        }
    }
    return response;
};

export const deleteComm = (id) => async(dispatch) => {
    const response = await fetch(`/api/communities/${id}`, {
        method: 'DELETE' });
    const data = await response.json();
    dispatch(removeCommAC(id))
    return response;
};

/* ----- REDUCER ------ */
const commsReducer = (state = {}, action) => {
    let newState;
    switch(action.type){
        case GET_COMMS: {
            const newState = { ...state }
            action.comms.comms?.forEach(comm => newState[comm.id] = comm);
            return newState;
        }

        case ADD_COMM: {
            const newState = { ...state, [action.comm.id]: { ...action.comm }
            }
            return newState;
        }

        case EDIT_COMM: {
            const newState = { ...state, [action.comm.id]: action.comm }
            return newState;
        }

        case DELETE_COMM: {
            const newState = { ...state }
            delete newState[action.commId]
            return newState;
        }
        default:
            return state;
    };
};


export default commsReducer
