import { fork,all } from '@redux-saga/core/effects'
import * as post from './post/saga'
export function* rootSaga() {
    yield all([
        fork(post.actionGetPostsWatcher),
        fork(post.actionSetPostsWatcher),
        fork(post.actionUpdatePostsWatcher),
        fork(post.actionDeletePostsWatcher),
        
        
    ])
}