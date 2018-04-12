import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import { ProductDetail } from '../../components/index'
import ProductList from './ProductList'

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
                header: null
            }
        },
    },
    {
        initialRouteName: 'ProductList',
    }
)

export default ProductStack