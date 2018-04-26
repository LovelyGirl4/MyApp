import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
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
const { height, width } = Dimensions.get('window')
const CalendarComponent = (props) => {
    const today = moment().format('L')
    const tomorrow = moment().add(1, 'days').format('L')
    const afterTomorrow = moment().add(2, 'days').format('L')
    const variableText = moment().add(2, 'days').format('dddd')
    const { selectDate, calendarShow } = props
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
            return <View key={index}
                style={{
                    width: (width - 54) / 4,
                    borderWidth: 0.8,
                    borderRadius: 5,
                    marginRight: 8,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: selectDate === a.date ? '#1890ff' : '#ccc'
                }}
            >
                <Text style={styles.calDate} onPress={() => props._checkDate(a.date)}>
                    {index === 2 ? `${calcDate(a.date)}${a.text}` : `${a.text}${calcDate(a.date)}`}
                </Text>
                <Text style={styles.calPrice} onPress={() => props._checkDate(a.date)}>￥20</Text>
            </View>
        })}
        <View style={styles.calMoreItem}>
            <View style={{ marginRight: -10 }}>
                <Text style={styles.calDate}>更多日期</Text>
                <Text style={styles.calPrice}>￥20起</Text>
            </View>
            <Icon name='chevron-right' color='grey' size={28} style={{marginRight: -5}}/>
        </View>
    </View>
}

export default CalendarComponent