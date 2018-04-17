// home页面
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { tokenLogin } from '../../actions/loginAction'
import { fetchTickets } from '../../actions/ticketAction'
import Login from '../login/index'
import Ticket from '../ticket/index'
import Product from '../product/index'
import Cart from '../cart/index'
import My from '../my/index'

const TabRouteConfigs = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: {  // 路由名称
        screen: Ticket,  // 对应的路由页面
        navigationOptions: ({ navigation }) => ({
            title: '首页',
            headerBackTitle: null,
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name={focused ? 'home' : 'home-outline'} size={28} color={tintColor} />
            }
        }),
    },
    Product: {
        screen: Product,
        navigationOptions: {  // 指定路由页面的配置选项
            title: '特产',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
            header: null,
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name={focused ? 'mushroom' : 'mushroom-outline'} size={28} color={tintColor} />
            },
        },
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            title: '购物车',
            header: null,
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name={focused ? 'cart' : 'cart-outline'} size={28} color={tintColor} />
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

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs)
// Stack
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
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

const HomeComponent = StackNavigator(StackRouteConfigs, StackNavigatorConfigs)

class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.tokenLogin(this.props.token)
        this.props.fetchTickets()
    }
    render() {
        return <HomeComponent/>
    }
}

export default connect(
    state => ({
        
    }),
    {
        tokenLogin,
        fetchTickets
    }
)(Home)