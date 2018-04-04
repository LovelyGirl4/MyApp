import { put, take, call, select } from 'redux-saga/effects'
// import { push } from 'react-router-redux'
import { DOLOGIN, DOLOGIN_SUCCESS, DOLOGIN_ERROR, TOKEN_LOGIN, TOKEN_LOGIN_SUCCESS } from '../constants/ActionTypes'
import { doLogin } from '../api/index'

function* fetchLoginFunc(username, password) {
    try {
        yield put({ type: DOLOGIN, fetching: true })
        const { access_token } = yield call(doLogin, username, password)
        // yield put({ type: AUTHENTICATED_SUCCESS, token: access_token })
        // 将token存进localStorage
        window.localStorage.setItem('token', access_token)
        // yield put(push('/home'))
        yield put({ type: DOLOGIN_SUCCESS })
    } catch (e) {
        console.log(e)
    }
}

function* tokenLoginFunc() {
    try {
        yield put({ type: TOKEN_LOGIN_SUCCESS })
    } catch (e) {
        console.log(e)
    }
}

export default {
    watchLogin: function* () {
        while (true) {
            const { username, password } = yield take(DOLOGIN)
            const token = yield call(fetchLoginFunc, username, password)
        }
    },
    watchTokenLogin: function* () {
        while (true) {
            yield take(TOKEN_LOGIN)
            yield call(tokenLoginFunc)
        }
    }
}
