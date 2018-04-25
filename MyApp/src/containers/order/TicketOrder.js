import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { TicketOrderComponent } from '../../components/index'

class TicketOrder extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <View>
            <TicketOrderComponent/>
        </View>
    }
}

export default connect(
    () => ({

    }),
    {

    }
)(TicketOrder)