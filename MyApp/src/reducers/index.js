import { combineReducers } from 'redux'
import { storage } from '../storage'
import login from './loginReducer'
import ticket from './ticketReducer'
import product from './productReducer'

const initialState = {
    token: ''
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
    login,
    ticket,
    product
})