import { takeLatest, put } from '@redux-saga/core/effects'
import { requestGet, API, requestPost ,requestPatch,requestDelete} from '../../api'
import * as actions from './actions'

function* getPosts({ payload }) {
    try {
        yield put(actions.setPostRequest())
        const response = yield requestGet(API.POSTS, payload)
        console.log('response',response)
        yield put(actions.setPostSuccess(response))
        // payload.cb?.()
    } catch (error) {
        yield put(actions.setPostError('Please check your internet connection'))
        console.log('error in getPosts', error);
    }

}

function* setPosts({ payload }) {
    console.log('payload',payload);
    try {
        // yield put(actions.setPostRequest())
        const response = yield requestPost(API.POSTS, payload)
        console.log('response',response)
        yield put(actions.setPostSuccess([{...payload,userId:1}]))

        // payload.cb?.()
    } catch (error) {
        yield put(actions.setPostError('Please check your internet connection'))
        console.log('error in getPosts', error);
    }

}
function* updatePosts({ payload }) {
    try {
        // yield put(actions.setPostRequest())
        const response = yield requestPatch(API.POSTS, payload.id, payload.data)
        console.log('response',response)
        yield put(actions.setupdatePostSuccess(payload))
        // payload.cb?.()
    } catch (error) {
        yield put(actions.setPostError('Please check your internet connection'))
        console.log('error in getPosts', error);
    }

}

function* deletePost({ payload }) {
    console.log('delete',payload);
    try {
        // yield put(actions.setPostRequest())
        const response = yield requestDelete(API.POSTS, payload,)
        console.log('response',response)
        // yield put(actions.setPostSuccess())
        // payload.cb?.()
    } catch (error) {
        yield put(actions.setPostError('Please check your internet connection'))
        console.log('error in getPosts', error);
    }

}


export function* actionGetPostsWatcher() {
    yield takeLatest(actions.GET_POSTS, getPosts);
}

export function* actionSetPostsWatcher() {
    yield takeLatest(actions.SET_POSTS, setPosts);
}

export function* actionUpdatePostsWatcher() {
    yield takeLatest(actions.UPDATE_POSTS, updatePosts);
}

export function* actionDeletePostsWatcher() {
    yield takeLatest(actions.DELETE_POSTS, deletePost);
}


