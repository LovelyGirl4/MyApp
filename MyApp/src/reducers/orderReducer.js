import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    productOrder: {},
    ticketOrder: {},
    myOrders: []
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.ADD_PRODUCT_ORDER_SUCCESS:
        return { ...state, productOrder: action.products }
    default:
        return state
    }
}

const ui = createAsyncUIReducer({
    // fetchTicketsUI: FETCH_TICKETS,
})

export default combineReducers({
    data,
    ui
})
