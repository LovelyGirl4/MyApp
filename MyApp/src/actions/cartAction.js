import * as ActionTypes from '../constants/ActionTypes'

export const fetchCartProducts = () => ({
    type: ActionTypes.FETCH_CART_PRODUCTS
})

// 改变购物车商品是否选中
export const updateCartProductChecked = (id, checked) => ({
    type: ActionTypes.UPDATE_CART_PRODUCT_CHECKED,
    id,
    checked
})

// 全选
export const updateCartAllProductsChecked = (checked) => ({
    type: ActionTypes.UPDATE_CART_ALL_PRODUCTS_CHECKED,
    checked
})

// 改变数量
export const updateCartProductNumber = (id, number) => ({
    type: ActionTypes.UPDATE_CART_PRODUCT_NUMBER,
    id,
    number
})

// 是否编辑
export const updateCartEdit = (state) => ({
    type: ActionTypes.UPDATE_CART_EDIT,
    state
})

// 删除购物车中商品
export const deleteCartProducts = (id) => ({
    type: ActionTypes.DELETE_CART_PRODUCTS,
    id
})