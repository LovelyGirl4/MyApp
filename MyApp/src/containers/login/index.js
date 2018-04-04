import React, {Component} from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { LoginComponent } from '../../components/index'
import { doLogin } from '../../actions/loginAction'

class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { doLogin } = this.props
        return <View>
            <LoginComponent doLogin={doLogin}/>
        </View>
    }
}

export default connect(
    state => ({}),
    { doLogin }
)(Login)