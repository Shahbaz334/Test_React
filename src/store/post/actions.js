export const SET_POST_REQUEST = 'SET_POST_REQUEST';
export const SET_POST_SUCCESS = 'SET_POST_SUCCESS';
export const SET_POST_ERROR = 'SET_POST_ERROR';

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const SET_POST_UPDATE_SUCCESS = 'SET_POST_UPDATE_SUCCESS';
export const DELETE_POSTS = 'DELETE_POSTS';


export const setPostRequest = () => ({
    type: SET_POST_REQUEST,
})

export const setPostSuccess = (payload) => ({
    type: SET_POST_SUCCESS,
    payload
})
export const setupdatePostSuccess = (payload) => ({
    type: SET_POST_UPDATE_SUCCESS,
    payload
})

export const setPostError = (payload) => ({
    type: SET_POST_ERROR,
    payload
})
export const getPosts = (payload) => ({
    type: GET_POSTS,
    payload
})

export const setPost = (payload) => ({
    type: SET_POSTS,
    payload
})
export const updatePost = (payload) => ({
    type: UPDATE_POSTS,
    payload
})
export const deletePost = (payload) => ({
    type: DELETE_POSTS,
    payload
})

