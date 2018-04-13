import { FETCH_CART_PRODUCTS_SUCCESS } from '../constants/ActionTypes'

const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_CART_PRODUCTS_SUCCESS:
        return { ...state, cartProducts: action.products }
    default:
        return state
    }
}

export default cartReducer
