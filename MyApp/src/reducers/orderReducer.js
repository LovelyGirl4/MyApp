import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    productOrder: {},
    productOrderAddress: undefined,
    ticketOrder: {},
    myOrders: []
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.ADD_PRODUCT_ORDER_SUCCESS:
        return { ...state, productOrder: action.products }
    case ActionTypes.ADD_TICKET_ORDER_SUCCESS:
        return { ...state, ticketOrder: action.place }
    case ActionTypes.UPDATE_PRODUCT_ORDER_ADDRESS_SUCCESS:
        return { ...state, productOrderAddress: action.address }
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
