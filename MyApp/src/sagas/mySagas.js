import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'

function* fetchMyProfileFunc(pagination) {
    try {
        const profile = yield call(api.fetchMyProfile)
        yield put({ type: ActionTypes.FETCH_MY_PROFILE_SUCCESS, profile })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.FETCH_MY_PROFILE_ERROR })
    }
}

export default {
    watchFetchMyProfile: function* () {
        while (true) {
            yield take(ActionTypes.FETCH_MY_PROFILE)
            yield call(fetchMyProfileFunc)
        }
    },
}
