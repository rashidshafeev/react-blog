import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getPostCommentsSuccess } from "../comments";

function fetchCommentsClosure(id: number) {
    return function fetchComments() {
        return axios ({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        });
    }
}


function* workGetPostCommentsFetch(action: PayloadAction<number>): any {
    const comments = yield call(fetchCommentsClosure(action.payload))
    yield put(getPostCommentsSuccess(comments.data))
}

function* commentsSaga() {
    yield takeEvery('comments/getPostCommentsFetch', workGetPostCommentsFetch)
}

export default commentsSaga