import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { TicketDetailComponent } from '../../components/index'
// import { fetchTickets } from '../../actions/ticketAction'
import { addTicketOrder } from '../../actions/orderAction'


class TicketList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchTickets()
    }
    _toTicketOrder = () => {
        const { navigation } = this.props
        this.props.addTicketOrder(navigation.state.params.ticket)
        navigation.navigate('TicketOrder')
    }
    render() {
        const { navigation } = this.props
        return <View>
            <TicketDetailComponent navigation={navigation} _toTicketOrder={this._toTicketOrder}/>
        </View>
    }
}

export default connect(
    ({ ticket }) => ({
        tickets: ticket.data.tickets.products
    }),
    {
        addTicketOrder
    }
)(TicketList)