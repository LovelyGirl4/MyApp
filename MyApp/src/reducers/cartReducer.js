import { combineReducers } from 'redux'
import { FETCH_CART_PRODUCTS, FETCH_CART_PRODUCTS_SUCCESS } from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    cartProducts: []
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_CART_PRODUCTS_SUCCESS:
        return { ...state, cartProducts: action.products }
    default:
        return state
    }
}

const ui = createAsyncUIReducer({
    fetchCartProductsUI: FETCH_CART_PRODUCTS
})

export default combineReducers({
    data,
    ui
})