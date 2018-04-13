import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { fetchCartProducts } from '../../actions/cartAction'
import { CartProductListComponent } from '../../components/index'

class CartProductList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchCartProducts()
    }
    render() {
        const { cartProducts, navigation, fetchCartProducts } = this.props
        return <View>
            <CartProductListComponent cartProducts={cartProducts} navigation={navigation}
                fetchCartProducts={fetchCartProducts}/>
        </View>
    }
}

export default connect(
    ({ cart }) => ({
        cartProducts: cart.data.cartProducts
    }),
    { fetchCartProducts }
)(CartProductList)