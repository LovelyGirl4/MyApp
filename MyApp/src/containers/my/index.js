import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import Profile from './Profile'
import Setting from './Setting'
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
        My: {
            screen: Profile,
            navigationOptions: {
                title: '我的'
            }
        },
    },
    {
        initialRouteName: 'My',
    }
)

export default MyStack