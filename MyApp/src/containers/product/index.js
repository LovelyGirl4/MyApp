import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import { ProductDetailComponent } from '../../components/index'
import ProductList from './ProductList'

// ProductDetail.navigationOptions = {
//     title: 'ProductDetail'
// }

const ProductStack = StackNavigator(
    {
        ProductDetail: {
            path: 'product/:id',
            screen: ProductDetailComponent,
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