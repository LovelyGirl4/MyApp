'use strict'
import { StyleSheet, Dimensions } from 'react-native'

import { blue, red, white, grey } from '../../utils/colors'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    addAddressView: {
        flexDirection: 'row'
    },
    blueLine: {
        backgroundColor: blue,
        height: 1.5
    },
    redLine: {
        backgroundColor: red,
        height: 1.5
    },
    whiteline: {
        flex: 0.5,
    },
    footer: {
        flexDirection: 'row',
        height: 60,
    },
    sumView: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: white
    },
    sum: {
        color: red,
        textAlign: 'right',
        fontSize: 16,
        paddingRight: 15
    },
    submitView: {
        flex: 1,
        backgroundColor: red,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        fontSize: 18,
        color: white
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
        color: red
    },
    modalHead: {
        fontSize: 20,
        marginTop: 20,
    },
    modalFoot: {
        fontSize: 18,
        textAlign: 'center',
        color: red
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
        backgroundColor: white,
        borderTopWidth: 0.8,
        borderColor: grey,
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
        color: red
    },
    note: {
        fontSize: 14,
        color: blue,
    },
    note1: {
        fontSize: 14,
        color: grey
    },
    note2: {
        fontSize: 14,
        color: red
    },
    ticTitle: {
        backgroundColor: '#fff',
        paddingLeft: 15,
        marginTop: 10,
        height: 60
    },
    // calendar
    calContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    calItem: {
        width: (width - 54) / 4,
        borderWidth: 0.8,
        borderColor: grey,
        borderRadius: 5,
        marginRight: 8,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    calMoreItem: {
        flexDirection: 'row',
        width: (width - 54) / 4,
        borderWidth: 0.8,
        borderColor: grey,
        borderRadius: 5,
        marginRight: 8,
        height: 45,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    calDate: {
        color: 'grey'
    },
    calPrice: {
        color: red
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },
    calTitle: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    line: {
        height: 0.6,
        backgroundColor: '#ccc'
    }
})

export default styles