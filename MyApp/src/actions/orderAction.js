import * as ActionTypes from '../constants/ActionTypes'

export const addProductOrder = (product) => ({
    type: ActionTypes.ADD_PRODUCT_ORDER,
    product
})

export const addTicketOrder = (place) => ({
    type: ActionTypes.ADD_TICKET_ORDER,
    place
})

export const updateProductOrderAddress = (address) => ({
    type: ActionTypes.UPDATE_PRODUCT_ORDER_ADDRESS,
    address
})