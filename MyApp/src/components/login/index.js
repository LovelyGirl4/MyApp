import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, CheckBox } from 'react-native'
import { WhiteSpace, WingBlank, List, InputItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// const CheckboxItem = Checkbox.CheckboxItem

class Login extends Component {
    render() {
        const { getFieldProps } = this.props.form
        return <View>
            <WingBlank size="lg">
                <InputItem
                    style={styles.input}
                    {...getFieldProps('phone')}
                    type="phone"
                    placeholder="186 1234 1234"
                ><Icon name="account-outline" size={28} color="#4F8EF7" /></InputItem>
                <InputItem
                    style={styles.input}
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="****"
                ><Icon name="key" size={26} color="#4F8EF7" /></InputItem>
                <Text style={styles.findPassword}>找回密码</Text>
                <Button type="primary" style={styles.button}>登录</Button>
                <CheckBox value='记住密码'/>       
            </WingBlank>
        </View>
    }
}

const LoginWrapper = createForm()(Login)

export default LoginWrapper


const styles = StyleSheet.create({
    findPassword: {
        lineHeight: 30,
        textAlign: 'right',
        color: '#008AE6',
        marginRight: 15
    },
    input: {
        marginLeft: 15,
        marginRight: 15
    },
    button: {
        marginLeft: 15,
        marginRight: 15
    }
})
