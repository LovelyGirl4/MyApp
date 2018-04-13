import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import CartProductList from './CartProductList'
import ProductDetail from '../product/ProductDetail'

// ProductDetail.navigationOptions = {
//     title: 'ProductDetail'
// }

const CartProductStack = StackNavigator(
    {
        ProductDetail: {
            path: 'product/:id',
            screen: ProductDetail,
            navigationOptions: {
                title: 'ProductDetail',
            }
        },
        ProductList: {
            screen: CartProductList,
            navigationOptions: {
                title: '购物车',
                // header: null
            }
        },
    },
    {
        initialRouteName: 'ProductList',
    }
)

export default CartProductStack