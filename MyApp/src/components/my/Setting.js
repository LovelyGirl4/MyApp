import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, Text, View, TextInput, ScrollView, Image,
    Dimensions} from 'react-native'
import { Button, List, Flex, WhiteSpace } from 'antd-mobile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Item = List.Item

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
        const height = Dimensions.get('window').height - 90 - 70
        return (
            <View>
                <ScrollView style={{ height: height }}>
                    <List>
                        <Item multipleLine onClick={() => { }} style={{ height: 90 }}>
                            <Flex>
                                <Flex.Item>
                                    <Icon name='account-circle' color='#ccc' size={74} />
                                </Flex.Item>
                                <Flex.Item style={{ flex: 3 }}>
                                    <Text>{`${first_name} ${surname}`}</Text>
                                    <Text>邮箱: {email ? email : '未设置'}</Text>
                                </Flex.Item>
                            </Flex>
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {
                                this.props.navigation.navigate('AddressList')
                            }}
                        >
                            收货地址管理
                        </Item>
                    </List>
                    <WhiteSpace />
                    <List>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => { }}
                        >
                                修改绑定手机号码
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => { }}
                        >
                                修改登录密码
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => { }}
                        >
                                支付密码管理
                        </Item>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {
                                this.props.navigation.navigate('Location')
                            }}
                        >
                            获取当前位置
                        </Item>
                    </List>
                </ScrollView>
                <View style={{height: 40}}>
                    <Button type='warning' onClick={this._onClick}>退出当前账户</Button>
                </View>
            </View>
        )
    }
}