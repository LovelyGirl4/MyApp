import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { TicketComponent } from '../../components/index'
import { fetchTickets } from '../../actions/ticketAction'


class Ticket extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchTickets()
    }
    render() {
        const {tickets} = this.props
        return <View>
            <TicketComponent tickets={tickets}/>
        </View>
    }
}

export default connect(
    ({ticket}) => ({
        tickets: ticket.tickets.products
    }),
    { fetchTickets }
)(Ticket)