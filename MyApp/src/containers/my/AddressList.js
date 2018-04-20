import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'antd-mobile'
import { MyAddressListComponent } from '../../components/index'
import { updateMyDefaultAddress, deleteMyAddress, updateMyAddress, addMyAddress } from '../../actions/myAction'
import { trimAllBlank } from '../../common/index'
import { _alert } from '../../utils/index'


class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchMyProfile()
    }
    // 改变默认地址
    _updateDefaultAddress = (id) => {
        this.props.updateMyDefaultAddress(id)
    }
    // 删除地址
    _deleteAddress = (id) => {
        this.props.deleteMyAddress(id)
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
        const { name, telephone, address } = payload
        const length = telephone && trimAllBlank(telephone).length 
        if (name && telephone && length > 6 && length < 12 && address) {
            this.props.addMyAddress(payload)
            this.props.navigation.goBack(null)
        } else {
            this._existAlert(payload)
        }
    }
    // 编辑地址保存
    _editSaveAddress = (payload) => {
        const { name, telephone, address } = payload
        const length = telephone && trimAllBlank(telephone).length 
        if (name && telephone && length > 6 && length < 12 && address) {
            this.props.updateMyAddress(payload)
            this.props.navigation.goBack(null)
        } else {
            this._existAlert(payload)
        }
    }
    // 列举警告的情况
    _existAlert = (payload) => {
        const { name, telephone, address } = payload
        const length = telephone && trimAllBlank(telephone).length 
        if (!name) {
            _alert('请填写收货人姓名')
        } else if (!telephone) {
            _alert('请填写联系电话')
        } else if (length < 7 || length > 11) {
            _alert('请填写正确的手机号码')
        } else if (!address) {
            _alert('请填写详细地址')
        }
    }

    render() {
        const { address, navigation } = this.props
        const height = Dimensions.get('window').height - 90 - 70
        return <View>
            <ScrollView style={{height: height}}>
                {
                    address.map((a, index) => {
                        return <MyAddressListComponent address={a} navigation={navigation} key={index}
                            _updateDefaultAddress={this._updateDefaultAddress} _deleteAddress={this._deleteAddress}
                            _editSaveAddress={this._editSaveAddress}/>
                    })
                }
            </ScrollView>
            <View style={{height: 60}}>
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
        updateMyDefaultAddress,
        updateMyAddress,
        deleteMyAddress,
        addMyAddress
    }
)(Profile)