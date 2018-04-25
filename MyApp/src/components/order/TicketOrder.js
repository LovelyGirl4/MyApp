// 门票下单
import React, { PureComponent } from 'react'
import { View, Text, Dimensions, ScrollView, Image } from 'react-native'
import { Flex, List, WhiteSpace, InputItem, Modal } from 'antd-mobile'
import styles from './styles'

export default class TicketOrder extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const scrollHeight = Dimensions.get('window').height - 60 - 60
        return <View>
            <ScrollView style={{height: scrollHeight}}>
                <Text>123</Text>
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