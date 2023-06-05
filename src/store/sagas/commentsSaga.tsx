import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getPostCommentsSuccess } from "../comments";

function fetchComments() {
    return axios ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts/1/comments'
    });
}


function* workGetPostCommentsFetch(action: any): any {
    console.log(action)
    const comments = yield call(fetchComments)
    yield put(getPostCommentsSuccess(comments.data))
}

function* commentsSaga() {
    yield takeEvery('comments/getPostCommentsFetch', workGetPostCommentsFetch)
}

export default commentsSaga