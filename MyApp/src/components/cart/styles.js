'use strict'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    splitLine: {
        height: 8,
        backgroundColor: '#eee'
    },
    grid: {
        height: 100,
        marginLeft: 15,
        marginRight: 15,
    },
    img: {
        height: 70,
        width: 70,
        marginTop: 10,
    },
    title: {
        fontSize: 16,
    },
    price: {
        fontSize: 18,
        color: 'red'
    },
    footer: {
        height: 58,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 0.6,
        borderColor: '#ccc',
    },
    check: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    checkAll: {
        fontSize: 18,
        color: '#ccc'
    },
    sumMoney: {
        flex: 2,
        flexDirection: 'row',
        height: 58,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumCount: {
        flex: 1,
        height: 58,
        backgroundColor: '#40a9ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumCountText: {
        fontSize: 18,
        color: '#fff'
    }
})

export default styles