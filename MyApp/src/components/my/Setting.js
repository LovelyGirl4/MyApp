import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, Text, View, TextInput, StyleSheet, Image } from 'react-native'
import { Button } from 'antd-mobile'

export default class Setting extends PureComponent {
    constructor(props) {
        super(props)
    }

    _onClick = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        const { profile, navigation } = this.props
        const { first_name, surname, email } = profile
        return (
            <View>
                <Text>{`${first_name} ${surname}`}</Text>
                <Text>{email}</Text>
                <Button type='warning' onClick={this._onClick}>退出当前账号</Button>
            </View>
        )
    }
}