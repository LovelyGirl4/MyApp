'use strict'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    addAddressView: {
        flexDirection: 'row'
    },
    blueLine: {
        backgroundColor: '#1890ff',
        height: 1.5
    },
    redLine: {
        backgroundColor: '#ff4d4f',
        height: 1.5
    },
    whiteline: {
        flex: 0.5,
        // backgroundColor: '#fff',
        // height: 1.5
    },
    footer: {
        flexDirection: 'row',
        height: 60,
    },
    sumView: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    sum: {
        color: '#ff4d4f',
        textAlign: 'right',
        fontSize: 16,
        paddingRight: 15
    },
    submitView: {
        flex: 1,
        backgroundColor: '#ff4d4f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        fontSize: 18,
        color: '#fff'
    },
    count: {
        textAlign: 'right',
        marginRight: 15
    },
    img: {
        height: 70,
        width: 70,
        marginTop: 10,
    },
    name: {
        fontSize: 17
    },
    price: {
        fontSize: 17,
        color: '#ff4d4f'
    },
    modalHead: {
        fontSize: 20,
        marginTop: 20,
    },
    modalFoot: {
        fontSize: 18,
        textAlign: 'center',
        color: '#ff4d4f'
    },
    checkName: {
        fontSize: 18,
        margin: 10
    },
    checkAddress: {
        fontSize: 16,
        margin: 10
    },
    addressContainer: {
        backgroundColor: '#fff',
        borderTopWidth: 0.8,
        borderColor: '#ccc',
        padding: 15,
    },
    name2: {
        fontSize: 18
    },
    tel: {
        fontSize: 16,
        textAlign: 'right',
    },
    address: {
        fontSize: 16,
        marginTop: 15,
    },
    red: {
        color: '#ff4d4f'
    }
})

export default styles