import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsSuccess } from "../posts";

function fetchPosts() {
    return axios ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    });
}

function* workGetPostsFetch(): any {
    const posts = yield call(fetchPosts)
    yield put(getPostsSuccess(posts.data))
}

function* postsSaga() {
    yield takeEvery('posts/getPostsFetch', workGetPostsFetch)
}

export default postsSaga