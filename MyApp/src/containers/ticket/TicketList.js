import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { TicketListComponent } from '../../components/index'
import { fetchTickets } from '../../actions/ticketAction'


class TicketList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchTickets()
    }
    render() {
        const {tickets, navigation} = this.props
        return <View>
            <TicketListComponent tickets={tickets} navigation={navigation}/>
        </View>
    }
}

export default connect(
    ({ticket}) => ({
        tickets: ticket.data.tickets.products
    }),
    { fetchTickets }
)(TicketList)