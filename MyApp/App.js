// app入口
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import { storage } from './src/storage'

import Login from './src/containers/login/index'
import Home from './src/containers/home/index'

export default class App extends Component {
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
        }).catch(err => {
            this.setState({
                token: undefined
            })
            console.warn(err.message)
        })
    }
    render() {
        const {token} = this.state
        return (
            <Provider store={store}>
                {token ? <Home/> : <Login />}
            </Provider>
        )
    }
}
