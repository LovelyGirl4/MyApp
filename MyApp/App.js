/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/store'

// StackNavigator用于实现各个页面间的跳转。TabNavigator切换组件，实现同一页面上不同界面的切换。
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { MainScreen, ProfileScreen, LoginComponent } from './src/components/index'
import Icon from 'react-native-vector-icons/Ionicons'


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

const TabRouteConfigs = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: {  // 路由名称
        screen: MainScreen,  // 对应的路由页面
        navigationOptions: ({ navigation }) => ({
            // tabBarLabel: '首页',
            title: '首页',
            tabBarIcon: <Icon name="ios-flower" size={28} color="#4F8EF7" />,
            // titleStyle: {fontSize: 28, color: 'orange'},
            // headerTitleStyle: {fontSize: 28, color: 'grey'}
        }),
    },
    News: {
        screen: ProfileScreen,
        navigationOptions: {  // 指定路由页面的配置选项
            // tabBarLabel: '新闻',   // 表示tab的标题
            title: '新闻',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
            tabBarIcon: <Icon name="ios-bookmarks" size={28} color="#4F8EF7" />,
            // headerTitleStyle: {fontSize: 28, color: '#666666'}
        },
    },
    My: {
        screen: LoginComponent,
        navigationOptions: {
            // tabBarLabel: '我的',
            title: '我的',
            tabBarIcon: <Icon name="ios-contact" size={28} color="#4F8EF7" />
        },
    }
}

const TabNavigatorConfigs = {
    initialRouteName: 'Home',  // 初始显示的Tab对应的页面路由名称
    tabBarComponent: TabBarBottom, // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
    tabBarPosition: 'bottom', // 设置选项卡的位置，在顶部或是底部，有'top'与'bottom'可选
    lazy: true,  // 是否懒加载页面
    tabBarOptions: {
    // activeBackgroundColor: 'white',
        activeTintColor: 'red',
        // inactiveBackgroundColor: 'white',
        inactiveTintColor: 'green',
    // showLabel: false,
    } // 在属性TabBarBottom与TabBarTop中有所不同
}

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs)
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
}
const StackNavigatorConfigs = {  // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
    initialRouteName: 'Tab',
    navigationOptions: {
        title: 'Welcome to learn React Native!',
        headerStyle: { backgroundColor: '#5da8ff' },  // 设置导航头部样式
        headerTitleStyle: { color: '#333333' },  // 设置导航头部标题样式
    }
}

const Home = StackNavigator(StackRouteConfigs, StackNavigatorConfigs)
// const App = StackNavigator({
//   Main: { screen: MainScreen },
//   Profile: { screen: ProfileScreen },
// })
// export default App
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})
