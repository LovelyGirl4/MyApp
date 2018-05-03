// app入口
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import Home from './src/containers/home/index'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        )
    }
}
