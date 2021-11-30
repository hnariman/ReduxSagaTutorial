import * as types from "./actionTypes";
import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects";
import { loadUsersError, loadUserSuccess } from "./Actions";
import { loadUsersApi } from "./api";

export function* onLoadUsersStartsAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUserSuccess)
        }
    }
    catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartsAsync)
}


const userSagas = [fork(onLoadUsers)];

export default function* rootSaga() {
    yield all([...userSagas]);
}