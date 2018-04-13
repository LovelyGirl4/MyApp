import { combineReducers } from 'redux'
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    products: {
        products: []
    }
}

const calcProducts = (oldData, data) => {
    return {
        ...data,
        products: oldData.products.concat(data.products)
    }
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
        return { ...state, products: calcProducts(state.products, action.products) }
    default:
        return state
    }
}

const ui = createAsyncUIReducer({
    fetchProductsUI: FETCH_PRODUCTS,
})

export default combineReducers({
    data,
    ui
})