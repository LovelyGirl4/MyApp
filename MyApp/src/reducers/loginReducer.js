import { DO_LOGIN_SUCCESS, TOKEN_LOGIN_SUCCESS } from '../constants/ActionTypes'

const initialState = {
    accessToken: '',
    userID: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case DO_LOGIN_SUCCESS:
        return { ...state, accessToken: action.accessToken, userID: JSON.parse(atob(action.accessToken.split('.')[1])).sub }
    case TOKEN_LOGIN_SUCCESS:
        return { ...state, accessToken: action.accessToken, userID: JSON.parse(atob(action.accessToken.split('.')[1])).sub }
    default:
        return state
    }
}

export default loginReducer
