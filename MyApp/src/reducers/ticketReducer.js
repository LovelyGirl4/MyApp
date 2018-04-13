import { combineReducers } from 'redux'
import { FETCH_TICKETS, FETCH_TICKETS_SUCCESS } from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    tickets: {}
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_TICKETS_SUCCESS:
        return { ...state, tickets: action.tickets }
    default:
        return state
    }
}

const ui = createAsyncUIReducer({
    fetchTicketsUI: FETCH_TICKETS,
})

export default combineReducers({
    data,
    ui
})
