// 路由页面
import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native'
import Login from '../login/index'
import { TicketDetail } from '../ticket/index'
import { ProductOrder, CheckAddress, TicketOrder } from '../order/index'
import { ProductDetail } from '../product/index'
import AddressList from '../my/AddressList'
import { MyAddressComponent } from '../../components/index'
import TabRouter from './TabRouter'

// Stack
const StackRouteConfigs = {
    Tab: { // 底部的切换页
        screen: TabRouter,
    },
    TicketDetail: {
        path: 'ticketDetail/:id',
        screen: TicketDetail,
        navigationOptions: {
            title: '景点详情'
        }
    },
    Login: { // 登录
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    ProductOrder: { // 商品下订单
        screen: ProductOrder,
        navigationOptions: {
            title: '确认订单'
        }
    },
    TicketOrder: { // 购票下单
        screen: TicketOrder,
        navigationOptions: {
            title: '提交订单'
        }
    },
    AddressList: { // 地址列表
        path: 'addressList',
        screen: AddressList,
        navigationOptions: {
            title: '管理收货地址'
        }
    },
    AddAddress: { // 新增地址
        path: 'addNewAddress',
        screen: MyAddressComponent,
        navigationOptions: ({ navigation }) => {
            const { address, _addSaveAddress } = navigation.state.params
            return {
                title: '添加新地址',
                headerBackTitle: ' ',
                headerRight: (
                    <View>
                        <Text onPress={() => _addSaveAddress(address)} style={styles.titleRight}>保存</Text>
                    </View>
                ),
            }
        }
    },
    EditAddress: { // 编辑地址
        path: 'editAddress/:id',
        screen: MyAddressComponent,
        navigationOptions: ({ navigation }) => {
            const { address, _editSaveAddress } = navigation.state.params
            return {
                title: ' 修改地址',
                headerRight: (
                    <View>
                        <Text onPress={() => _editSaveAddress(address)} style={styles.titleRight}>
                            保存
                        </Text>
                    </View>
                ),
            }
        }
    },
    CheckAddress: { // 选择收货地址
        screen: CheckAddress,
        navigationOptions: ({ navigation }) => {
            return {
                title: '选择收货地址',
                headerRight: (
                    <View>
                        <Text onPress={() => navigation.navigate('AddressList')} style={styles.titleRight}>
                            编辑
                        </Text>
                    </View>
                ),
            }
        }
    },
    ProductDetail: {
        path: 'product/:id',
        screen: ProductDetail,
        navigationOptions: {
            title: '商品详情',
        }
    }
}
const StackNavigatorConfigs = {  // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
    initialRouteName: 'Tab',
    // navigationOptions: {
    //     title: 'Welcome to learn React Native!',
    //     headerStyle: { backgroundColor: '#5da8ff' },  // 设置导航头部样式
    //     headerTitleStyle: { color: '#333333' },  // 设置导航头部标题样式
    // }
}

const StackRouter = StackNavigator(StackRouteConfigs, StackNavigatorConfigs)

export default StackRouter

const styles = StyleSheet.create({
    titleRight: {
        fontSize: 16,
        marginRight: 15
    }
})
