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

function* updateMyDefaultAddressFunc(id) {
    try {
        const data = store.getState().my.data.address
        const address = data.map(d => {
            return { ...d, checked: d.id === id ? true : false }
        })
        yield put({ type: ActionTypes.UPDATE_MY_DEFAULT_ADDRESS_SUCCESS, address })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.UPDATE_MY_DEFAULT_ADDRESS_ERROR })
    }
}

function* updateMyAddressFunc(address) {
    try {
        const data = store.getState().my.data.address
        const newAddress = data.map(d => {
            if (d.id === address.id) {
                return {...address}
            }
            return { ...d, checked: address.checked === true ? false : d.checked }
        })
        yield put({ type: ActionTypes.UPDATE_MY_ADDRESS_SUCCESS, address: newAddress })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.UPDATE_MY_ADDRESS_ERROR })
    }
}

function* deleteMyAddressFunc(id) {
    try {
        const data = store.getState().my.data.address
        const address = data.filter(d => d.id !== id)
        const check = address.filter(a => a.checked === true)
        if (check.length === 0 && address.length > 0) {
            address[0] = {...address[0], checked: true}
        }
        yield put({ type: ActionTypes.DELETE_MY_ADDRESS_SUCCESS, address })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.DELETE_MY_ADDRESS_ERROR })
    }
}

function* addMyAddressFunc(address) {
    try {
        let data = store.getState().my.data.address
        if (address.checked) {
            data = data.map(d => ({...d, checked: false}))
        }
        data = [...data].concat({ ...address, id: data.length })
        yield put({ type: ActionTypes.ADD_MY_ADDRESS_SUCCESS, address: data })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.ADD_MY_ADDRESS_ERROR })
    }
}

export default {
    watchFetchMyProfile: function* () {
        while (true) {
            yield take(ActionTypes.FETCH_MY_PROFILE)
            yield call(fetchMyProfileFunc)
        }
    },
    watchUpdateMyDefaultAddress: function* () {
        while (true) {
            const {id} = yield take(ActionTypes.UPDATE_MY_DEFAULT_ADDRESS)
            yield call(updateMyDefaultAddressFunc, id)
        }
    },
    watchUpdateMyAddress: function* () {
        while (true) {
            const { address } = yield take(ActionTypes.UPDATE_MY_ADDRESS)
            yield call(updateMyAddressFunc, address)
        }
    },
    watchDeleteMyAddress: function* () {
        while (true) {
            const { id } = yield take(ActionTypes.DELETE_MY_ADDRESS)
            yield call(deleteMyAddressFunc, id)
        }
    },
    watchAddMyAddress: function* () {
        while (true) {
            const { address } = yield take(ActionTypes.ADD_MY_ADDRESS)
            yield call(addMyAddressFunc, address)
        }
    },
}
