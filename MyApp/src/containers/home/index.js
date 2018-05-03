// home页面
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { tokenLogin } from '../../actions/loginAction'
import { fetchTickets } from '../../actions/ticketAction'
import Login from '../login/index'
import StackRouter from './StackRouter'
import { storage } from '../../storage'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: undefined
        }
    }
    componentDidMount() {
        storage.load({
            key: 'accessToken',
            id: '001'
        }).then(res => {
            this.setState({
                token: res
            })
            this.props.tokenLogin(res)
            this.props.fetchTickets()
        }).catch(err => {
            this.setState({
                token: undefined
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            token: nextProps.token
        })
    }
    render() {
        const {token} = this.state
        console.log('this.state:', this.state.token)
        // return <StackRouter/>
        if (token) {
            return <StackRouter />
        }
        return <Login />
    }
}

export default connect(
    ({login}) => ({
        token: login.data.accessToken
    }),
    {
        tokenLogin,
        fetchTickets
    }
)(Home)