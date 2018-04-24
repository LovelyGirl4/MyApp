import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Text, View } from 'react-native'

import Profile from './Profile'
import Setting from './Setting'
import AddressList from './AddressList'

import { MyAddressComponent, MyScanComponent, MyLocationComponent } from '../../components/index'
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
        // AddressList: {
        //     path: 'addressList',
        //     screen: AddressList,
        //     navigationOptions: {
        //         title: '管理收货地址'
        //     }
        // },
        AddAddress: {
            path: 'addNewAddress',
            screen: MyAddressComponent,
            navigationOptions: ({navigation}) => {
                const { address, _addSaveAddress } = navigation.state.params
                return {
                    title: '添加新地址',
                    headerBackTitle: ' ',
                    headerRight: (
                        <View>
                            <Text onPress={() => _addSaveAddress(address)} style={{fontSize: 16}}>保存</Text>
                        </View>
                    ),
                }
            }
        },
        EditAddress: {
            path: 'editAddress/:id',
            screen: MyAddressComponent,
            navigationOptions: ({navigation}) => {
                const { address, _editSaveAddress } = navigation.state.params
                return {
                    title: ' 修改地址',
                    headerRight: (
                        <View>
                            <Text onPress={() => _editSaveAddress(address)} style={{fontSize: 16}}>
                                保存
                            </Text>
                        </View>
                    ),
                }
            }
        },
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