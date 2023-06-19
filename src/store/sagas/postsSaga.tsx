import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery } from "redux-saga/effects";
import { getPostsFail, getPostsSuccess } from "../posts";


function* workGetAllPostsFetch(): any {
    try {
        const posts = yield axios.get(`https://jsonplaceholder.typicode.com/posts`)
        yield delay(500)
        yield put(getPostsSuccess(posts.data))
    } catch (error) {
        console.log(error)
        yield put(getPostsFail())
    }

}

function* workGetUserPostsFetch(action: PayloadAction<number>): any {
    try {
        const posts = yield axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${action.payload}`)
        yield delay(500)
        yield put(getPostsSuccess(posts.data))
    } catch (error) {
        console.log(error)
        yield put(getPostsFail())
    }
}

function* postsSaga() {
    yield takeEvery('posts/getAllPostsFetch', workGetAllPostsFetch)
    yield takeEvery('posts/getUserPostsFetch', workGetUserPostsFetch)
}

export default postsSaga