import { all } from 'redux-saga/effects'

import commentsSaga from './commentsSaga'
import postsSaga from './postsSaga'
import usersSaga from './usersSaga'


function* rootSaga() {
    yield all([
        usersSaga(),
        postsSaga(),
        commentsSaga()
    ])
}

export default rootSaga