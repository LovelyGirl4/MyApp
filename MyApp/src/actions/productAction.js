import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART } from '../constants/ActionTypes'

export const fetchProducts = (pagination) => ({
    type: FETCH_PRODUCTS,
    pagination
})

export const addProductToCart = (id) => ({
    type: ADD_PRODUCT_TO_CART,
    id
})