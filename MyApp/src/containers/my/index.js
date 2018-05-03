import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Text, View } from 'react-native'

import Profile from './Profile'
import AddressList from './AddressList'
import { tabHeaderHeight } from '../../utils/dimensions'

import { MyAddressComponent, MyScanComponent, MyLocationComponent } from '../../components/index'
// ProductDetail.navigationOptions = {
//     title: 'ProductDetail'
// }

const MyStack = StackNavigator(
    {
        Scan: {
            screen: MyScanComponent,
            navigationOptions: {
                title: '扫一扫'
            }
        },
        Location: {
            screen: MyLocationComponent,
            navigationOptions: {
                title: '获取当前位置'
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
                    ),
                    headerStyle: {
                        height: tabHeaderHeight
                    },
                }
            }
        },
    },
    {
        initialRouteName: 'My',
    }
)

export default MyStack