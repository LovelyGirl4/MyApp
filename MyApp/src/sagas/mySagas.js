import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'
import store from '../store'

function* fetchMyProfileFunc(pagination) {
    try {
        const profile = yield call(api.fetchMyProfile)
        yield put({ type: ActionTypes.FETCH_MY_PROFILE_SUCCESS, profile })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.FETCH_MY_PROFILE_ERROR })
    }
}

function* changeMyDefaultAddressFunc(id) {
    try {
        const data = store.getState().my.data.address
        const address = data.map(d => {
            return { ...d, checked: d.id === id ? true : false }
        })
        yield put({ type: ActionTypes.CHANGE_MY_DEFAULT_ADDRESS_SUCCESS, address })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.CHANGE_MY_DEFAULT_ADDRESS_ERROR })
    }
}

function* deleteMyAddressFunc(id) {
    try {
        const data = store.getState().my.data.address
        const address = data.filter(d => d.id !== id)
        yield put({ type: ActionTypes.DELETE_MY_ADDRESS_SUCCESS, address })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.DELETE_MY_ADDRESS_ERROR })
    }
}

export default {
    watchFetchMyProfile: function* () {
        while (true) {
            yield take(ActionTypes.FETCH_MY_PROFILE)
            yield call(fetchMyProfileFunc)
        }
    },
    watchChangeMyDefaultAddress: function* () {
        while (true) {
            const {id} = yield take(ActionTypes.CHANGE_MY_DEFAULT_ADDRESS)
            yield call(changeMyDefaultAddressFunc, id)
        }
    },
    watchDeleteMyAddress: function* () {
        while (true) {
            const { id } = yield take(ActionTypes.DELETE_MY_ADDRESS)
            yield call(deleteMyAddressFunc, id)
        }
    },
}
