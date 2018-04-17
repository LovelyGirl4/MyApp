import { FETCH_CART_PRODUCTS, CHANGE_CART_PRODUCT_CHECKED, CHANGE_CART_ALL_PRODUCTS_CHECKED,
    CHANGE_CART_PRODUCT_NUMBER } from '../constants/ActionTypes'

export const fetchCartProducts = () => ({
    type: FETCH_CART_PRODUCTS
})

// 改变购物车商品是否选中
export const changeCartProductChecked = (id, checked) => ({
    type: CHANGE_CART_PRODUCT_CHECKED,
    id,
    checked
})

// 全选
export const changeCartAllProductsChecked = (checked) => ({
    type: CHANGE_CART_ALL_PRODUCTS_CHECKED,
    checked
})

// 改变数量
export const changeCartProductNumber = (id, number) => ({
    type: CHANGE_CART_PRODUCT_NUMBER,
    id,
    number
})