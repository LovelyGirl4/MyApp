// home页面
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { tokenLogin } from '../../actions/loginAction'
import { fetchTickets } from '../../actions/ticketAction'
import StackRouter from './StackRouter'


class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.tokenLogin(this.props.token)
        this.props.fetchTickets()
    }
    render() {
        return <StackRouter/>
    }
}

export default connect(
    state => ({
        
    }),
    {
        tokenLogin,
        fetchTickets
    }
)(Home)