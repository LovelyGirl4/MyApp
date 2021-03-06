import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { ProductOrderComponent } from '../../components/index'
import { addMyAddress } from '../../actions/myAction'
import { trimAllBlank } from '../../common/index'
import { _alert } from '../../utils/index'

class Ticket extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchTickets()
    }
    // 跳到新增地址页面
    _addAddress = () => {
        this.props.navigation.navigate('AddAddress', {
            address: {
                id: undefined,
                name: undefined,
                telephone: undefined,
                address: undefined,
                checked: false
            },
            _addSaveAddress: this._addSaveAddress
        })
    }
    // 新增地址保存
    _addSaveAddress = (payload) => {
        const { name, telephone, district, address } = payload
        const length = telephone && trimAllBlank(telephone).length
        if (name && telephone && length > 6 && length < 12 && district && address) {
            this.props.addMyAddress(payload)
            this.props.navigation.goBack(null)
        } else {
            this._existAlert(payload)
        }
    }
    // 列举警告的情况
    _existAlert = (payload) => {
        const { name, telephone, address, district } = payload
        const length = telephone && trimAllBlank(telephone).length
        if (!name) {
            _alert('请填写收货人姓名')
        } else if (!telephone) {
            _alert('请填写联系电话')
        } else if (length < 7 || length > 11) {
            _alert('请填写正确的手机号码')
        } else if (!district) {
            _alert('请选择所在地区')
        } else if (!address) {
            _alert('请填写详细地址')
        }
    }
    render() {
        const { address, productOrder, productOrderAddress, navigation } = this.props
        return <View>
            <ProductOrderComponent address={address} productOrder={productOrder} navigation={navigation}
                _addAddress={this._addAddress} productOrderAddress={productOrderAddress}/>
        </View>
    }
}

export default connect(
    ({my, order}) => ({
        address: my.data.address,
        productOrder: order.data.productOrder,
        productOrderAddress: order.data.productOrderAddress
    }),
    {
        addMyAddress
    }
)(Ticket)