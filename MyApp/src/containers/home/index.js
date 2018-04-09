import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { HomeComponent } from '../../components/index'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <HomeComponent/>
    }
}

export default connect(
    state => ({}),
    {}
)(Home)