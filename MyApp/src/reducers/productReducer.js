import { FETCH_PRODUCTS_SUCCESS } from '../constants/ActionTypes'

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

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
        return { ...state, products: calcProducts(state.products, action.products) }
    default:
        return state
    }
}

export default ticketReducer
