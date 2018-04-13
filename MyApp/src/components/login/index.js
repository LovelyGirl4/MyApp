import React, {Component} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Flex, WhiteSpace, WingBlank, List, InputItem, Button, Checkbox } from 'antd-mobile'
import { createForm } from 'rc-form'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const CheckboxItem = Checkbox.CheckboxItem

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsernameChange = (val) => {
        this.setState({
            username: val
        })
    }
    handlePasswordChange = (val) => {
        this.setState({
            password: val
        })
    }

    handleClick = () => {
        const {username, password} = this.state
        this.props.doLogin(username, password)
    }

    render() {
        const { getFieldProps } = this.props.form
        const { username, password } = this.state
        return <View>
            {/*<Image style={styles.avator} source={require('../../asset/a.jpeg')} />*/}
            <Text style={styles.login}>登录页面</Text>
            <WingBlank size="lg">
                <InputItem
                    style={styles.input}
                    // {...getFieldProps('phone')}
                    // type="phone"
                    placeholder="186 1234 1234"
                    // value={username}
                    onChange={this.handleUsernameChange}
                >
                    <Icon name="account-outline" size={28} color="#4F8EF7" />
                </InputItem>
                <InputItem
                    style={styles.input}
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="****"
                    // value={password}
                    onChange={this.handlePasswordChange}
                >
                    <Icon name="key" size={26} color="#4F8EF7" />
                </InputItem>
                <Flex>
                    <Flex.Item>
                        <CheckboxItem style={styles.checkbox}>
                            <Text style={styles.remember}>记住密码</Text>
                        </CheckboxItem>
                    </Flex.Item>
                    <Flex.Item>
                        <Text style={styles.findPassword}>找回密码?</Text>
                    </Flex.Item>
                </Flex>
                <Button type="primary" style={styles.button} onClick={this.handleClick}>登录</Button>
                <Text style={styles.register}>还没账号？立即注册</Text>   
            </WingBlank>
        </View>
    }
}

const LoginWrapper = createForm()(Login)

export default LoginWrapper


const styles = StyleSheet.create({
    // avator: {
    //     height: 60,
    //     width: 60,
    //     borderRadius: 25,
    //     resizeMode: 'center',
    // },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#008AE6',
        marginTop: 40,
        marginBottom: 20
    },
    findPassword: {
        fontSize: 15,
        textAlign: 'right',
        color: 'grey',
        marginRight: 15
    },
    remember: {
        fontSize: 15,
        color: 'grey',
    },
    register: {
        fontSize: 15,
        color: '#008AE6',
        marginTop: 10,
        marginRight: 15,
        textAlign: 'right'
    },
    input: {
        marginLeft: 15,
        marginRight: 15
    },
    button: {
        marginLeft: 15,
        marginRight: 15
    },
    checkbox: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
    }
})
