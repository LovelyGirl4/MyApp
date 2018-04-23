import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'

import CartProductList from './CartProductList'
import ProductDetail from '../product/ProductDetail'
import CartEdit from './CartEdit'

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
            navigationOptions: ({ navigation }) => {
                return {
                    title: '购物车',
                    headerRight: (<CartEdit/>)
                }
            }
        },
    },
    {
        initialRouteName: 'ProductList',
    }
)

export default CartProductStack