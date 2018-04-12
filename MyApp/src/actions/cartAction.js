import { FETCH_CART_PRODUCTS } from '../constants/ActionTypes'

export const fetchCartProducts = (pagination) => ({
    type: FETCH_CART_PRODUCTS,
    pagination
})