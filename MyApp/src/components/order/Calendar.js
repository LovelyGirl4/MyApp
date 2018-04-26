import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Calendar, Tag } from 'antd-mobile'
import moment from 'moment'
import Icon from 'react-native-vector-icons/EvilIcons'
import styles from './styles'

const calcDate = (date) => {
    return `${date.slice(0, 2)}-${date.slice(3, 5)}`
}

const calcDateName = (date) => {
    switch (date) {
    case 'Monday':
        return '周一'
    case 'Tuesday':
        return '周二'
    case 'Wednesday':
        return '周三'
    case 'Thursday':
        return '周四'
    case 'Friday':
        return '周五'
    case 'Saturday':
        return '周六'
    case 'Sunday':
        return '周日'
    default:
        return date
    }
}

const CalendarComponent = (props) => {
    const today = moment().format('L')
    const tomorrow = moment().add(1, 'days').format('L')
    const afterTomorrow = moment().add(2, 'days').format('L')
    const variableText = moment().add(2, 'days').format('dddd')
    const arr = [
        {
            text: '今天',
            date: today
        },
        {
            text: '明天',
            date: tomorrow
        },
        {
            text: calcDateName(variableText),
            date: afterTomorrow
        }
    ]
    return <View style={styles.calContainer}>
        {arr.map((a, index) => {
            return <View key={index} style={styles.calItem}>
                <Text style={styles.calDate}>
                    {index === 2 ? `${calcDate(a.date)}${a.text}` : `${a.text}${calcDate(a.date)}`}
                </Text>
                <Text style={styles.calPrice}>￥20</Text>
            </View>
        })}
        <View style={styles.calMoreItem}>
            <View style={{ marginRight: -10 }}>
                <Text style={styles.calDate}>更多日期</Text>
                <Text style={styles.calPrice}>￥20</Text>
            </View>
            <Icon name='chevron-right' color='grey' size={28} style={{marginRight: -5}}/>
        </View>
    </View>
}

export default CalendarComponent