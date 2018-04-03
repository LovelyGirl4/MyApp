import React, {Component} from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!!!!
            </Text>
            <Text style={styles.instructions}>
                To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
            </Text>
        </View>
    }
}

export default connect(
    state => ({}),
    {}
)(Login)