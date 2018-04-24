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
        flexDirection: 'row'
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
    sumCountTrue: {
        flex: 1,
        height: 58,
        backgroundColor: '#40a9ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumCountFalse: {
        flex: 1,
        height: 58,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumCountText: {
        fontSize: 18,
        color: '#fff'
    },
    emptyView: {
        marginTop: '30%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        marginTop: 15,
        marginBottom: 15,
        color: 'grey',
        fontSize: 16
    },
    emptyButton: {
        width: 160,
        height: 40
    },
    rowBack: {
        backgroundColor: '#ff4d4f',
        height: 115,
        justifyContent: 'center',
    },
    rowBackText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'right',
        marginRight: 15
    }
})

export default styles