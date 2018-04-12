import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { ProductListComponent } from '../../components/index'
import { fetchProducts } from '../../actions/productAction'


class ProductList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchProducts()
    }
    render() {
        const { products, pagination, fetchProducts, navigation } = this.props
        return <View>
            <ProductListComponent products={products} pagination={pagination} navigation={navigation}
                fetchProducts={fetchProducts} />
        </View>
    }
}

export default connect(
    ({ product }) => ({
        products: product.products.products,
        pagination: {
            current_page: product.products.current_page,
            total_page: product.products.total_page,
            total_count: product.products.total_count
        }
    }),
    { fetchProducts }
)(ProductList)