import * as ActionTypes from '../constants/ActionTypes'

export const addProductOrder = () => ({
    type: ActionTypes.ADD_PRODUCT_ORDER
})

export const updateProductOrderAddress = (address) => ({
    type: ActionTypes.UPDATE_PRODUCT_ORDER_ADDRESS,
    address
})