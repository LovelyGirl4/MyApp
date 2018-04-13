import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { ProductDetailComponent } from '../../components/index'
import { addProductToCart } from '../../actions/productAction'


class ProductList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        const { addProductToCart, navigation } = this.props
        return <View>
            <ProductDetailComponent navigation={navigation}
                addProductToCart={addProductToCart} />
        </View>
    }
}

export default connect(
    state => ({}),
    {
        addProductToCart
    }
)(ProductList)