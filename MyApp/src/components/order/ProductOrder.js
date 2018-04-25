// 商品下单
import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView, Image } from 'react-native'
import { Flex, List, WhiteSpace, InputItem, Modal } from 'antd-mobile'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import Line from './Line'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'

const Item = List.Item

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    _toAddress = () => {
        const { address, navigation, _addAddress } = this.props
        if (address.length > 0) {
            navigation.navigate('CheckAddress')
        } else {
            _addAddress()
        }
    }
    _showModal = () => {
        this.setState({
            visible: true
        })
    }
    _closeModal = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        // Todo
        const {width, height} = Dimensions.get('window')
        // const count = parseInt(width / 10)
        const scrollHeight = height - 60 - 60
        const { address, productOrder, productOrderAddress } = this.props
        let checkAddress
        if (productOrderAddress) {
            checkAddress = {...productOrderAddress}
        } else {
            checkAddress = address.length > 0 && address.filter(a => a.checked === true)[0]
        }
        const icon = <Icon name={checkAddress ? 'location-on' : 'add-box'} size={checkAddress? 28 : 40} color='#40a9ff' />
        return (
            <View>
                <ScrollView style={{ height: scrollHeight }}>
                    <WhiteSpace />
                    <List>
                        <Item arrow="horizontal" thumb={icon} onClick={this._toAddress}>
                            {address.length === 0 ? '新增收货地址' : <View>
                                <Text style={styles.checkName}>收货人：{checkAddress.name} {checkAddress.telephone}</Text>
                                <Text style={styles.checkAddress}>收货地址：{checkAddress.district.join('')}{checkAddress.address}</Text>
                            </View>}
                        </Item>
                    </List>
                    <Line/>
                    <WhiteSpace />
                    <List>
                        <Item>商品列表</Item>
                        {
                            productOrder.map((p, index) => {
                                const source = p.images.length > 0 ? { uri: baseURL(p.images[0].url) } : noPicture
                                return <Item key={index}>
                                    <Flex>
                                        <Flex.Item>
                                            <Image source={source} style={styles.img} />
                                        </Flex.Item>
                                        <Flex.Item style={{flex: 3}}>
                                            <Text style={styles.name}>{p.name}</Text>
                                            <Text>some tags</Text>
                                            <Flex>
                                                <Flex.Item>
                                                    <Text style={styles.price}>￥ 200</Text>
                                                </Flex.Item>
                                                <Flex.Item>
                                                    <Text style={styles.count}>X {p.count}</Text>
                                                </Flex.Item>
                                            </Flex>
                                        </Flex.Item>
                                    </Flex>
                                </Item>
                            })
                        }
                    </List>
                    <WhiteSpace />
                    <List>
                        <Item arrow="horizontal" onClick={this._showModal} extra='快递 免邮'>配送方式</Item>
                        <InputItem placeholder='如需备注请输入'>
                            备注
                        </InputItem>
                    </List>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.sumView}>
                        <Text style={styles.sum}>合计： ￥ 0</Text>
                    </View>
                    <View style={styles.submitView}>
                        <Text style={styles.submit}>提交订单</Text>
                    </View>
                </View>
                <Modal
                    popup
                    visible={this.state.visible}
                    onClose={this._closeModal}
                    animationType="slide-up"
                >
                    <List>
                        <Item><Text style={styles.modalHead}>配送方式</Text></Item>
                        <Item>快递 免邮</Item>
                        <Item onClick={this._closeModal}>
                            <Text style={styles.modalFoot}>关闭</Text>
                        </Item>
                    </List>
                </Modal>
            </View>
        )
    }
}

export default Location
