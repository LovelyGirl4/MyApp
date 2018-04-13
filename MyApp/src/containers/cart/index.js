import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import { ProductDetailComponent } from '../../components/index'
import CartProductList from './CartProductList'

// ProductDetail.navigationOptions = {
//     title: 'ProductDetail'
// }

const CartProductStack = StackNavigator(
    {
        ProductDetail: {
            path: 'product/:id',
            screen: ProductDetailComponent,
            navigationOptions: {
                title: 'ProductDetail',
            }
        },
        ProductList: {
            screen: CartProductList,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'ProductList',
    }
)

export default CartProductStack