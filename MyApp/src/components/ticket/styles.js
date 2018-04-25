'use strict'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    // ticketList
    headRow: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        borderTopWidth: 0.7,
        borderBottomWidth: 0.7,
        borderColor: '#ddd'
    },
    headCol: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        borderRightWidth: 0.7
    },
    headColLast: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headText: {
        fontSize: 16,
    },
    splitLine: {
        height: 0.8,
        backgroundColor: '#ddd',
        marginLeft: 20,
        marginRight: 20
    },
    grid: {
        height: 100,
        marginLeft: 20,
        marginRight: 20
    },
    img: {
        height: 70,
        width: 70,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        justifyContent: 'flex-start'
    },
    comment: {
        color: '#5da8ff'
    },
    price: {
        fontSize: 18,
        color: 'red'
    },
    // ticketDetail
    viewImg: {
        height: 200,
        width: '100%',
    },
    viewTitle: {
        minHeight: 80
    },
    viewItem: {
        minHeight: 50
    },
    viewName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 25,
        height: 35
    },
    ticketTag: {
        color: '#008AE6',
        marginTop: 10,
    },
    ticketTags: {
        flexDirection: 'row',
    },
    tagView: {
        borderWidth: 0.6,
        borderColor: '#ccc',
        borderRadius: 4,
        marginRight: 10,
        marginTop: 12,
    },
    tag: {
        padding: 4,
        fontSize: 12
    },
    ticketItem: {
        minHeight: 100
    }
})

export default styles