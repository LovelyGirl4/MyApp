import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { fetchCartProducts, updateCartProductChecked, updateCartAllProductsChecked,
    updateCartProductNumber, deleteCartProducts } from '../../actions/cartAction'
import { CartProductListComponent } from '../../components/index'

class CartProductList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchCartProducts()
    }
    render() {
        const { cartProducts, cartEdit, fetchCartProductsUI, navigation, fetchCartProducts, updateCartProductChecked,
            updateCartAllProductsChecked, updateCartProductNumber, deleteCartProducts} = this.props
        return <View>
            <CartProductListComponent cartProducts={cartProducts} fetchCartProductsUI={fetchCartProductsUI}
                navigation={navigation} updateCartAllProductsChecked={updateCartAllProductsChecked}
                fetchCartProducts={fetchCartProducts} updateCartProductChecked={updateCartProductChecked}
                updateCartProductNumber={updateCartProductNumber} cartEdit={cartEdit}
                deleteCartProducts={deleteCartProducts}/>
        </View>
    }
}

export default connect(
    ({ cart }) => ({
        cartProducts: cart.data.cartProducts,
        cartEdit: cart.data.cartEdit,
        fetchCartProductsUI: cart.ui.fetchCartProductsUI
    }),
    {
        fetchCartProducts,
        updateCartProductChecked,
        updateCartAllProductsChecked,
        updateCartProductNumber,
        deleteCartProducts
    }
)(CartProductList)