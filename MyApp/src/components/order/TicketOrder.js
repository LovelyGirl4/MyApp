// 门票下单
import React, { PureComponent } from 'react'
import { View, Text, Dimensions, ScrollView, Image } from 'react-native'
import { Flex, List, WhiteSpace, InputItem, Modal, Tag } from 'antd-mobile'
import moment from 'moment'
import styles from './styles'
import Calendar from './Calendar'

const Item = List.Item

const today = moment().format('L')
const tomorrow = moment().add(1, 'days').format('L')
const afterTomorrow = moment().add(2, 'days').format('L')

export default class TicketOrder extends PureComponent {
    constructor(props) {
        super(props),
        this.state = {
            selectDate: today,
            calendarShow: false
        }
    }
    // 选日期
    _checkDate = (date) => {
        this.setState({
            selectDate: date
        })
    }
    // 更多日期，显示日历
    _showCalendar = () => {
        this.setState({
            calendarShow: true
        })
    }
    _closeCalendar = () => {
        this.setState({
            calendarShow: false
        })
    }
    render() {
        const { ticketOrder } = this.props
        const { selectDate, calendarShow } = this.state
        const scrollHeight = Dimensions.get('window').height - 60 - 60

        return <View>
            <ScrollView style={{height: scrollHeight}}>
                <View style={{ backgroundColor: '#fff', paddingLeft: 15 }}>
                    <Text style={{ fontSize: 20}}>{ticketOrder.name}</Text>
                    <Text>凭身份证直接入园</Text>
                </View>
                <WhiteSpace/>
                <List>
                    <Item arrow="horizontal" extra={<Text style={styles.note}>购买须知</Text>} style={{marginRight: 10, paddingLeft: 15}}>
                        <Text style={styles.note1}>购买后立即可用, 04月25号至5月1号内使用有效</Text>
                        <Text style={styles.note2}>现在购买此日期产品，将无法产生退款，退款将收取手续费2.00元每张</Text>
                    </Item>
                </List>
                <WhiteSpace />
                <View style={{ backgroundColor: '#fff', padding: 15 }}>
                    <Text style={{fontSize: 18}}>使用日期</Text>
                    <Calendar selectDate={selectDate} _checkDate={this._checkDate} calendarShow={calendarShow}
                        _showCalendar={this._showCalendar} _closeCalendar={this._closeCalendar}/>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.sumView}>
                    <Text style={styles.sum}>总价： ￥ 40</Text>
                </View>
                <View style={styles.submitView}>
                    <Text style={styles.submit}>提交订单</Text>
                </View>
            </View>
        </View>
    }
}