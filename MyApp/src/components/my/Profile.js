import React, { PureComponent } from 'react'
// 生成二维码
import QRCode from 'react-native-qrcode'

import { View, Text, AppRegistry } from 'react-native'
import { Button } from 'antd-mobile'
import styles from './styles'


class Profile extends PureComponent {
    constructor(props) {
        super(props)
    }
    _toScan = () => {
        const { profile, navigation } = this.props
        navigation.navigate('Scan')
    }
    render() {
        const { first_name, surname, email } = this.props.profile
        return (
            <View>
                <Text style={styles.font}>{`${first_name} ${surname}`}</Text>
                <Text style={styles.font}>{email}</Text>
                <Text style={styles.font}>我的二维码名片</Text>
                <QRCode
                    value={email}
                    size={200}
                    bgColor='purple'
                    fgColor='white' />
                <Text onPress={this._toScan} style={styles.font}>扫一扫</Text>
            </View>
        )
    }
}

// AppRegistry.registerComponent('Profile', () => Profile)

export default Profile
