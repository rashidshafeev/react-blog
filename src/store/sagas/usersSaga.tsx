import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
import { getUserSuccess, getUserFail } from "../users";

function* workGetUserFetch(action: PayloadAction<number>): any {
    try {
        const users = yield axios.get(`https://jsonplaceholder.typicode.com/users/${action.payload}`)
        console.log(users)
        yield delay(500)
        yield put(getUserSuccess(users.data))
    } catch (error) {
        console.log(error)
        yield put(getUserFail())
    }
}

function* usersSaga() {
    yield takeEvery('users/getUserFetch', workGetUserFetch)
}

export default usersSaga