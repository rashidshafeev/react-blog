import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
import { getPostCommentsFail, getPostCommentsSuccess } from "../comments";


function* workGetPostCommentsFetch(action: PayloadAction<number>): any {
    try {
        const comments = yield axios.get(`https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`)
    yield delay(500)
    yield put(getPostCommentsSuccess(comments.data))
    } catch (error) {
        console.log(error)
        yield put(getPostCommentsFail(action.payload))
    }
    
}

function* commentsSaga() {
    yield takeEvery('comments/getPostCommentsFetch', workGetPostCommentsFetch)
}

export default commentsSaga