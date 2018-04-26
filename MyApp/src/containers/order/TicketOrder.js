import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { TicketOrderComponent } from '../../components/index'

class TicketOrder extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { ticketOrder, navigation } = this.props
        return <View>
            <TicketOrderComponent ticketOrder={ticketOrder} navigation={navigation}/>
        </View>
    }
}

export default connect(
    ({order}) => ({
        ticketOrder: order.data.ticketOrder
    }),
    {
    
    }
)(TicketOrder)