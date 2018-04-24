import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { ProductOrderComponent } from '../../components/index'


class Ticket extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchTickets()
    }
    render() {
        const { address, productOrder, navigation } = this.props
        return <View>
            <ProductOrderComponent address={address} productOrder={productOrder} navigation={navigation}/>
        </View>
    }
}

export default connect(
    ({my, order}) => ({
        address: my.data.address,
        productOrder: order.data.productOrder
    }),
    {
    }
)(Ticket)