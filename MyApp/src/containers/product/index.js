import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

// ProductDetail.navigationOptions = {
//     title: 'ProductDetail'
// }

const ProductStack = StackNavigator(
    {
        ProductDetail: {
            path: 'product/:id',
            screen: ProductDetail,
            navigationOptions: {
                title: 'ProductDetail',
            }
        },
        ProductList: {
            screen: ProductList,
            navigationOptions: {
                title: '特产'
            }
        },
    },
    {
        initialRouteName: 'ProductList',
    }
)

export default ProductStack