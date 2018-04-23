import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    cartProducts: [],
    cartEdit: false
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.FETCH_CART_PRODUCTS_SUCCESS:
        return { ...state, cartProducts: action.products }
    case ActionTypes.UPDATE_CART_PRODUCT_CHECKED_SUCCESS:
        return { ...state, cartProducts: action.products }
    case ActionTypes.UPDATE_CART_ALL_PRODUCTS_CHECKED_SUCCESS:
        return { ...state, cartProducts: action.products }
    case ActionTypes.UPDATE_CART_PRODUCT_NUMBER_SUCCESS:
        return { ...state, cartProducts: action.products }
    case ActionTypes.UPDATE_CART_EDIT_SUCCESS:
        return { ...state, cartEdit: action.state }
    case ActionTypes.DELETE_CART_PRODUCTS_SUCCESS:
        return { ...state, cartProducts: action.products }
    default:
        return state
    }
}

const ui = createAsyncUIReducer({
    fetchCartProductsUI: ActionTypes.FETCH_CART_PRODUCTS
})

export default combineReducers({
    data,
    ui
})