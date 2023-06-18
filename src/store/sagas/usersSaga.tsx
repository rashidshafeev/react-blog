import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUserSuccess } from "../users";

function fetchUsersClosure(id: number) {
    return function fetchComments() {
        return axios ({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/users/${id}`
        });
    }
}

function* workGetUserFetch(action: PayloadAction<number>): any {
    const users = yield call(fetchUsersClosure(action.payload))
    yield put(getUserSuccess(users.data))
}

function* usersSaga() {
    yield takeEvery('users/getUserFetch', workGetUserFetch)
}

export default usersSaga