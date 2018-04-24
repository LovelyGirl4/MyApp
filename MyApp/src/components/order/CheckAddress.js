// 选择收货地址
import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Flex } from 'antd-mobile'
import styles from './styles'
import { trimAllBlank } from '../../common/index'

const Item = Flex.Item

export default class AddressList extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, name, telephone, district, address, checked }= this.props.address
        return (
            <View style={styles.addressContainer}>
                <Flex>
                    <Item>
                        <Text style={styles.name2} onPress={this.props._updateProductOrderAddress}>{name}</Text>
                    </Item>
                    <Item><Text style={styles.tel} onPress={this.props._updateProductOrderAddress}>{trimAllBlank(telephone)}</Text></Item>
                </Flex>
                <Text style={styles.address} onPress={this.props._updateProductOrderAddress}>
                    <Text style={styles.red}>{checked ? '[默认地址]' : ''}</Text>
                    {district.join('')}{address}
                </Text>
            </View>
        )
    }
}