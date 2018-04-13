import { combineReducers } from 'redux'
import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_ERROR,
    TOKEN_LOGIN, TOKEN_LOGIN_SUCCESS } from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    accessToken: '',
    userID: ''
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case DO_LOGIN_SUCCESS:
        return { ...state, accessToken: action.accessToken, userID: JSON.parse(atob(action.accessToken.split('.')[1])).sub }
    case DO_LOGIN_ERROR:
        return { ...state, accessToken: '', userID: '' }
    case TOKEN_LOGIN_SUCCESS:
        return { ...state, accessToken: action.accessToken, userID: JSON.parse(atob(action.accessToken.split('.')[1])).sub }
    default:
        return state
    }
}
const ui = createAsyncUIReducer({
    doLoginUI: DO_LOGIN,
    tokenLoginUI: TOKEN_LOGIN
})

export default combineReducers({
    data,
    ui
})
