import { FETCH_PRODUCTS } from '../constants/ActionTypes'

export const fetchProducts = (pagination) => ({
    type: FETCH_PRODUCTS,
    pagination
})