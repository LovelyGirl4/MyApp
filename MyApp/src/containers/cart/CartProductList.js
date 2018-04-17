import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { fetchCartProducts, changeCartProductChecked, changeCartAllProductsChecked,
    changeCartProductNumber } from '../../actions/cartAction'
import { CartProductListComponent } from '../../components/index'

class CartProductList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchCartProducts()
    }
    render() {
        const { cartProducts, fetchCartProductsUI, navigation, fetchCartProducts, changeCartProductChecked,
            changeCartAllProductsChecked, changeCartProductNumber} = this.props
        return <View>
            <CartProductListComponent cartProducts={cartProducts} fetchCartProductsUI={fetchCartProductsUI}
                navigation={navigation} changeCartAllProductsChecked={changeCartAllProductsChecked}
                fetchCartProducts={fetchCartProducts} changeCartProductChecked={changeCartProductChecked}
                changeCartProductNumber={changeCartProductNumber}/>
        </View>
    }
}

export default connect(
    ({ cart }) => ({
        cartProducts: cart.data.cartProducts,
        fetchCartProductsUI: cart.ui.fetchCartProductsUI
    }),
    {
        fetchCartProducts,
        changeCartProductChecked,
        changeCartAllProductsChecked,
        changeCartProductNumber
    }
)(CartProductList)