'use strict'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    addressContainer: {
        backgroundColor: '#fff',
        marginBottom: 15
    },
    headView: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    name: {
        fontSize: 18,
        width: '40%'
    },
    tel: {
        fontSize: 16,
        textAlign: 'right',
        width: '60%'
    },
    addressView: {
        height: 65,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    address: {
        fontSize: 16
    },
    operationView: {
        flexDirection: 'row',
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    default: {
        fontSize: 16,
        flex: 2
    },
    edit: {
        flex: 1,
        textAlign: 'right',
        fontSize: 16
    },
    del: {
        flex: 1,
        textAlign: 'right',
        fontSize: 16
    },
    locate: {
        color: '#ccc'
    }
})

export default styles