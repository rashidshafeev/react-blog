import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getCommentsSuccess } from "../comments";

function fetchComments() {
    return axios ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    });
}


function* workGetCommentsFetch(): any {
    const comments = yield call(fetchComments)
    yield put(getCommentsSuccess(comments.data))
}

function* commentsSaga() {
    yield takeEvery('comments/getCommentsFetch', workGetCommentsFetch)
}

export default commentsSaga