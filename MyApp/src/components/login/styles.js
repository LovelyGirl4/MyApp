'use strict'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    // avator: {
    //     height: 60,
    //     width: 60,
    //     borderRadius: 25,
    //     resizeMode: 'center',
    // },
    loginView: {
        marginRight: 15,
        marginTop: 60
    },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#008AE6',
        marginTop: 40,
        marginBottom: 20
    },
    findPassword: {
        fontSize: 15,
        textAlign: 'right',
        color: 'grey',
    },
    remember: {
        fontSize: 15,
        color: 'grey',
    },
    register: {
        fontSize: 15,
        color: '#008AE6',
        marginTop: 10,
        textAlign: 'right'
    },
    button: {
        marginLeft: 15,
    },
    checkbox: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    third: {
        marginLeft: 15,
        marginTop: 60
    },
    thirdAccount: {
        color: 'grey',
        textAlign: 'center'
    },
    splitLine: {
        height: 0.8,
        backgroundColor: '#ccc'
    },
    icon: {
        marginTop: 20,
        marginLeft: 15
    },
    qqView: {
        width: 55,
        height: 55,
        borderRadius: 27,
        borderWidth: 1.5,
        borderColor: '#40a9ff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5
    },
    qq: {
        color: '#40a9ff',
        textAlign: 'center'
    },
    wechatView: {
        width: 55,
        height: 55,
        borderRadius: 27,
        borderWidth: 1.5,
        borderColor: '#73d13d',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5
    },
    wechat: {
        color: '#73d13d',
        textAlign: 'center'
    },
    weiboView: {
        width: 55,
        height: 55,
        borderRadius: 27,
        borderWidth: 1.5,
        borderColor: '#ff7a45',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5
    },
    weibo: {
        color: '#ff7a45',
        textAlign: 'center'
    }
})

export default styles