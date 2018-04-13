import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, Text, View, TextInput, StyleSheet, Image } from 'react-native'
import { Button } from 'antd-mobile'

export default class Profile extends PureComponent {
    constructor(props) {
        super(props)
    }
    _toSetting = () => {
        const { profile, navigation } = this.props
        console.log('navigation:', navigation)
        navigation.navigate('Setting', { profile })
    }
    render() {
        const { first_name, surname, email } = this.props.profile
        return (
            <View>
                <Text>{`${first_name} ${surname}`}</Text>
                <Text>{email}</Text>
                <Text onPress={this._toSetting}>设置</Text>
            </View>
        )
    }
}