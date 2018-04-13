import React, {Component} from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { LoginComponent } from '../../components/index'
import { doLogin } from '../../actions/loginAction'

class Login extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextProps) {
        const { assessToken } = nextProps
        if (assessToken && nextProps.navigation) {
            nextProps.navigation.navigate('Tab')
        }
    }
    render() {
        const { doLogin } = this.props
        return <View>
            <LoginComponent doLogin={doLogin}/>
        </View>
    }
}

export default connect(
    ({login}) => ({
        assessToken: login.data.accessToken
    }),
    { doLogin }
)(Login)