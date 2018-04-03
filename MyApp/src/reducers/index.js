import { combineReducers } from 'redux'
import loginReducer from './loginReducer'

const initialState = {
    // token: getToken(),
    token: '123'
}

const app = (state = initialState, a) => {
    let nextState = {}
    switch (a.type) {
    // case AUTHENTICATED_SUCCESS:
    //     nextState = { ...state, token: a.token }
    //     break
    default:
        nextState = { ...state }
        break
    }
    return nextState
}

export default combineReducers({
    app,
    loginReducer
})