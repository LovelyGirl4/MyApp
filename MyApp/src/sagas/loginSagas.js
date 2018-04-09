import { put, take, fork, call, select } from 'redux-saga/effects'
// import { push } from 'react-router-redux'
import { DOLOGIN, DOLOGIN_SUCCESS, DOLOGIN_ERROR, TOKEN_LOGIN, TOKEN_LOGIN_SUCCESS } from '../constants/ActionTypes'
import { doLogin } from '../api/index'
import { storage, saveStorage, loadStorage } from '../storage'

function* doLoginFunc(username, password) {
    try {
        yield put({ type: DOLOGIN, fetching: true })
        // console.log('doLogin:', doLogin)
        const { access_token } = yield call(doLogin, username, password)
        console.log('access_token:', access_token)
        // yield put({ type: AUTHENTICATED_SUCCESS, token: access_token })
        // 将token存进localStorage
        yield call(saveStorage, 'accessToken', '001', access_token)
        yield put({ type: DOLOGIN_SUCCESS })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: DOLOGIN_ERROR })
    }
}

// function* tokenLoginFunc() {
//     try {
//         yield put({ type: TOKEN_LOGIN_SUCCESS })
//     } catch (e) {
//         console.log(e)
//     }
// }

export default {
    watchLogin: function* () {
        while (true) {
            const { username, password } = yield take(DOLOGIN)
            const token = yield call(doLoginFunc, username, password)
        }
    },
    // watchTokenLogin: function* () {
    //     while (true) {
    //         yield take(TOKEN_LOGIN)
    //         yield call(tokenLoginFunc)
    //     }
    // }
}
