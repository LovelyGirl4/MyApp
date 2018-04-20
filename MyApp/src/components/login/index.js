import React, {Component} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Flex, WhiteSpace, WingBlank, List, InputItem, Button, Checkbox } from 'antd-mobile'
import { createForm } from 'rc-form'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { _alert } from '../../utils/index'
import styles from './styles'

const CheckboxItem = Checkbox.CheckboxItem

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    _handleChange = (key) => (val) => {
        this.setState({
            [key]: val
        })
    }

    _handleClick = () => {
        const {username, password} = this.state
        if (!username) {
            _alert('请输入用户名')
        } else if (!password) {
            _alert('请输入密码')
        } else {
            this.props.doLogin(username, password)
        }
    }

    render() {
        const { getFieldProps } = this.props.form
        const { username, password } = this.state
        return <View style={styles.loginView}>
            {/*<Image style={styles.avator} source={require('../../asset/a.jpeg')} />*/}
            <Text style={styles.login}>登录页面</Text>
            <WingBlank size="lg">
                <InputItem
                    // {...getFieldProps('phone')}
                    // type="phone"
                    placeholder="请输入手机号/邮箱"
                    // value={username}
                    onChange={this._handleChange('username')}
                >
                    <Icon name="account-outline" size={28} color="#4F8EF7" />
                </InputItem>
                <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="请输入密码"
                    // value={password}
                    onChange={this._handleChange('password')}
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
                <Button type="primary" style={styles.button} onClick={this._handleClick}>登录</Button>
                <Text style={styles.register}>还没账号？立即注册</Text>
                <Flex style={styles.third}>
                    <Flex.Item><View style={styles.splitLine}/></Flex.Item>
                    <Flex.Item><Text style={styles.thirdAccount}>第三方账户登录</Text></Flex.Item>
                    <Flex.Item><View style={styles.splitLine}/></Flex.Item>
                </Flex>
                <Flex style={styles.icon}>
                    <Flex.Item>
                        <View style={styles.qqView}>
                            <FontIcon name='qq' size={30} style={styles.qq} />
                        </View>
                        <Text style={styles.qq}>QQ</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <View style={styles.wechatView}>
                            <FontIcon name='wechat' size={30} style={styles.wechat} />
                        </View>
                        <Text style={styles.wechat}>微信</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <View style={styles.weiboView}>
                            <FontIcon name='weibo' size={30} style={styles.weibo} />
                        </View>
                        <Text style={styles.weibo}>微博</Text>
                    </Flex.Item>
                </Flex>
            </WingBlank>
        </View>
    }
}

const LoginWrapper = createForm()(Login)

export default LoginWrapper

