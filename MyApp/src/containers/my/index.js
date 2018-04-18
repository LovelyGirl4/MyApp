import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Text, View } from 'react-native'

import Profile from './Profile'
import Setting from './Setting'
import AddressList from './AddressList'
// ProductDetail.navigationOptions = {
//     title: 'ProductDetail'
// }

const MyStack = StackNavigator(
    {
        Setting: {
            path: 'setting',
            screen: Setting,
            navigationOptions: {
                title: '设置',
            }
        },
        AddressList: {
            path: 'addressList',
            screen: AddressList,
            navigationOptions: {
                title: '管理收货地址'
            }
        },
        My: {
            screen: Profile,
            navigationOptions: ({navigation}) => {
                return {
                    title: '我的',
                    headerRight: (
                        <View>
                            <Text onPress={() => navigation.navigate('Setting')}>设置</Text>
                        </View>
                    )
                }
            }
        },
    },
    {
        initialRouteName: 'My',
    }
)

export default MyStack