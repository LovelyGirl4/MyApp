import { FETCH_CART_PRODUCTS, UPDATE_CART_PRODUCT_CHECKED, UPDATE_CART_ALL_PRODUCTS_CHECKED,
    UPDATE_CART_PRODUCT_NUMBER } from '../constants/ActionTypes'

export const fetchCartProducts = () => ({
    type: FETCH_CART_PRODUCTS
})

// 改变购物车商品是否选中
export const updateCartProductChecked = (id, checked) => ({
    type: UPDATE_CART_PRODUCT_CHECKED,
    id,
    checked
})

// 全选
export const updateCartAllProductsChecked = (checked) => ({
    type: UPDATE_CART_ALL_PRODUCTS_CHECKED,
    checked
})

// 改变数量
export const updateCartProductNumber = (id, number) => ({
    type: UPDATE_CART_PRODUCT_NUMBER,
    id,
    number
})