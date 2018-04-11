import { DO_LOGIN_SUCCESS, TOKEN_LOGIN_SUCCESS } from '../constants/ActionTypes'

const initialState = {
    accessToken: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case DO_LOGIN_SUCCESS:
        return { ...state, accessToken: action.accessToken }
    case TOKEN_LOGIN_SUCCESS:
        return { ...state, accessToken: action.accessToken }
    default:
        return state
    }
}

export default loginReducer
