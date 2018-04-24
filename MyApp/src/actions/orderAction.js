import * as ActionTypes from '../constants/ActionTypes'

export const addProductOrder = (product) => ({
    type: ActionTypes.ADD_PRODUCT_ORDER,
    product
})

export const updateProductOrderAddress = (address) => ({
    type: ActionTypes.UPDATE_PRODUCT_ORDER_ADDRESS,
    address
})