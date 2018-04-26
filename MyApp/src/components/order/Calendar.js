import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Modal } from 'antd-mobile'
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars'
import moment from 'moment'
import Icon from 'react-native-vector-icons/EvilIcons'
import { blue, red, white, grey, black } from '../../utils/colors'
import styles from './styles'

moment.locale('zh', {
    months: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'YYYY-MM-DD',
        l: 'YYYY-M-D',
        LL: 'MMMM Do YYYY',
        ll: 'MMM D YYYY',
        LLL: 'MMMM Do YYYY LT',
        lll: 'MMM D YYYY LT',
        LLLL: 'dddd, MMMM Do YYYY LT',
        llll: 'ddd, MMM D YYYY LT'
    }
})

LocaleConfig.locales['zh'] = {
    monthNames: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
    monthNamesShort: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
    dayNames: ['日', '一', '二', '三', '四', '五', '六'],
    dayNamesShort: ['日', '一', '二', '三', '四', '五', '六']
}

LocaleConfig.defaultLocale = 'zh'

const calcDate = (date) => {
    return date.slice(5)
}

const { height, width } = Dimensions.get('window')
const CalendarComponent = (props) => {
    const { selectDate, calendarShow } = props
    const today = moment().format('L')
    const tomorrow = moment().add(1, 'days').format('L')
    const variableDate = selectDate !== today && selectDate !== tomorrow ?
        selectDate : moment().add(2, 'days').format('L')
    const variableText = moment(variableDate).format('dddd')
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
            text: variableText,
            date: variableDate
        }
    ]
    return <View style={styles.calContainer}>
        {arr.map((a, index) => {
            return <View key={index}
                style = {[styles.calItem, {borderColor: selectDate === a.date ? '#1890ff' : '#ccc'}]}
            >
                <Text style={styles.calDate} onPress={() => props._checkDate(a.date)}>
                    {index === 2 ? `${calcDate(a.date)}${a.text}` : `${a.text}${calcDate(a.date)}`}
                </Text>
                <Text style={styles.calPrice} onPress={() => props._checkDate(a.date)}>￥20</Text>
            </View>
        })}
        <View style={styles.calMoreItem}>
            <View style={{ marginRight: -10 }}>
                <Text style={styles.calDate} onPress={props._showCalendar}>更多日期</Text>
                <Text style={styles.calPrice} onPress={props._showCalendar}>￥20起</Text>
            </View>
            <Icon name='chevron-right' color='grey' size={28} style={{marginRight: -5}}/>
        </View>
        <Modal
            title='选择日期'
            popup
            closable={true}
            maskClosable
            visible={calendarShow}
            onClose={props._closeCalendar}
            animationType="slide-up"
        >
            <Text style={styles.calTitle}>
                选择日期
            </Text>
            <View style={styles.line}/>
            <CalendarList
                style={styles.calendar}
                theme={{
                    calendarBackground: white,
                    textSectionTitleColor: blue,
                    todayTextColor: blue,
                    selectedDayTextColor: white,
                    selectedDayBackgroundColor: blue,
                    arrowColor: white,
                    textDisabledColor: grey,
                    textDayFontSize: 16,
                    textMonthFontSize: 18,
                    textDayHeaderFontSize: 16
                }}
                minDate={Date()}
                monthFormat='yyyy年 MM月'
                markedDates={{
                    [selectDate]: { selected: true, marked: false, selectedColor: blue },
                }}
                pastScrollRange={0}
                futureScrollRange={3}
                scrollEnabled={true}
                showScrollIndicator={true}
                onDayPress={props._onDayPress}
            />
        </Modal>
    </View>
}

export default CalendarComponent