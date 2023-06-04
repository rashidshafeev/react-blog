import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersSuccess } from "../users";

function fetchUsers() {
    return axios ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    });
}

function* workGetUsersFetch(): any {
    const users = yield call(fetchUsers)
    yield put(getUsersSuccess(users.data))
}

function* usersSaga() {
    yield takeEvery('users/getUsersFetch', workGetUsersFetch)
}

export default usersSaga