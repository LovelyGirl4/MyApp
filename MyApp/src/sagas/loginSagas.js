import { put, take, fork, call, select } from 'redux-saga/effects'
import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_ERROR, TOKEN_LOGIN, TOKEN_LOGIN_SUCCESS } from '../constants/ActionTypes'
import { doLogin } from '../api/index'
import { saveStorage } from '../storage'

function* doLoginFunc(username, password) {
    try {
        yield put({ type: DO_LOGIN, fetching: true })
        const { access_token } = yield call(doLogin, username, password)
        // 将token存进localStorage
        yield call(saveStorage, 'accessToken', '001', access_token)
        yield put({ type: DO_LOGIN_SUCCESS, accessToken: access_token })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: DO_LOGIN_ERROR })
    }
}

function* tokenLoginFunc(token) {
    try {
        yield put({ type: TOKEN_LOGIN_SUCCESS, accessToken: token })
    } catch (e) {
        console.log(e)
    }
}

export default {
    watchLogin: function* () {
        while (true) {
            const { username, password } = yield take(DO_LOGIN)
            yield call(doLoginFunc, username, password)
        }
    },
    watchTokenLogin: function* () {
        while (true) {
            const { token } = yield take(TOKEN_LOGIN)
            yield call(tokenLoginFunc, token)
        }
    }
}
