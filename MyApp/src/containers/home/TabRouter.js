// 底部的tab页
import React, { Component } from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TicketList } from '../ticket/index'
import { ProductList } from '../product/index'
import { CartProductList, CartEdit } from '../cart/index'
import My from '../my/index'

const TabRouteConfigs = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: {  // 路由名称
        screen: TicketList,  // 对应的路由页面
        navigationOptions: ({ navigation }) => ({
            title: '首页',
            headerBackTitle: null,
            headerLeft: null,
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name={focused ? 'home' : 'home-outline'} size={28} color={tintColor} />
            }
        }),
    },
    Product: {
        screen: ProductList,
        navigationOptions: {  // 指定路由页面的配置选项
            title: '特产',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
            headerLeft: null,
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name={focused ? 'mushroom' : 'mushroom-outline'} size={28} color={tintColor} />
            },
        },
    },
    Cart: {
        screen: CartProductList,
        navigationOptions: ({ navigation }) => {
            return {
                title: '购物车',
                headerLeft: null,
                headerRight: (<CartEdit />),
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Icon name={focused ? 'cart' : 'cart-outline'} size={28} color={tintColor} />
                }
            }
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            title: '我的',
            header: null,
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name={focused ? 'account' : 'account-outline'} size={28} color={tintColor} />
            }
        },
    }
}
// Tab
const TabNavigatorConfigs = {
    initialRouteName: 'Home',  // 初始显示的Tab对应的页面路由名称
    tabBarComponent: TabBarBottom, // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
    tabBarPosition: 'bottom', // 设置选项卡的位置，在顶部或是底部，有'top'与'bottom'可选
    lazy: true,  // 是否懒加载页面
    tabBarOptions: {
        activeBackgroundColor: 'white',
        activeTintColor: '#40a9ff',
        inactiveBackgroundColor: 'white',
        inactiveTintColor: 'grey',
        showLabel: true,
        showIcon: true,
        indicatorStyle: { height: 0 },
    } // 在属性TabBarBottom与TabBarTop中有所不同
}
const TabRouter = TabNavigator(TabRouteConfigs, TabNavigatorConfigs)

export default TabRouter