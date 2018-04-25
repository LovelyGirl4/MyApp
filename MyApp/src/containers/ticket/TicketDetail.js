import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { TicketDetailComponent } from '../../components/index'
// import { fetchTickets } from '../../actions/ticketAction'


class TicketList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchTickets()
    }
    render() {
        const { navigation } = this.props
        return <View>
            <TicketDetailComponent navigation={navigation} />
        </View>
    }
}

export default connect(
    ({ ticket }) => ({
        tickets: ticket.data.tickets.products
    }),
    {

    }
)(TicketList)