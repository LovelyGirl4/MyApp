import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button, WhiteSpace } from 'antd-mobile'
import { CheckAddressComponent } from '../../components/index'
import { addMyAddress } from '../../actions/myAction'
import { updateProductOrderAddress } from '../../actions/orderAction'
import { trimAllBlank } from '../../common/index'
import { _alert } from '../../utils/index'


class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchMyProfile()
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

    _updateProductOrderAddress = (address) => {
        this.props.updateProductOrderAddress(address)
        this.props.navigation.goBack(null)
    }

    render() {
        const { address, navigation } = this.props
        const height = Dimensions.get('window').height - 50 - 60
        return <View>
            <ScrollView style={{ height: height }}>
                <WhiteSpace/>
                {
                    address.map((a, index) => {
                        return <CheckAddressComponent address={a} navigation={navigation} key={index}
                            _updateProductOrderAddress={() => this._updateProductOrderAddress(a)}/>
                    })
                }
            </ScrollView>
            <View style={{ height: 60 }}>
                <Button type='primary' onClick={this._addAddress}>添加新地址</Button>
            </View>
        </View>
    }
}

export default connect(
    ({ my }) => ({
        address: my.data.address
    }),
    {
        addMyAddress,
        updateProductOrderAddress
    }
)(Profile)