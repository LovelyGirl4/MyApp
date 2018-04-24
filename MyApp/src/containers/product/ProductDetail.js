import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { ProductDetailComponent } from '../../components/index'
import { addProductToCart } from '../../actions/productAction'
import { addProductOrder } from '../../actions/orderAction'


class ProductList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        const { addProductToCart, addProductOrder, navigation } = this.props
        return <View>
            <ProductDetailComponent navigation={navigation}
                addProductToCart={addProductToCart} addProductOrder={addProductOrder}/>
        </View>
    }
}

export default connect(
    state => ({}),
    {
        addProductToCart,
        addProductOrder
    }
)(ProductList)