import { FETCH_TICKETS_SUCCESS } from '../constants/ActionTypes'

const initialState = {
    tickets: {}
}

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_TICKETS_SUCCESS:
        return { ...state, tickets: action.tickets }
    default:
        return state
    }
}

export default ticketReducer
