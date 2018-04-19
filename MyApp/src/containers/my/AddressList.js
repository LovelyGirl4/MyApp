import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Modal, Button } from 'antd-mobile'
import { MyAddressListComponent } from '../../components/index'
import { changeMyDefaultAddress, deleteMyAddress, changeMyAddress, addMyAddress } from '../../actions/myAction'

const alert = Modal.alert

class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchMyProfile()
    }
    // 改变默认地址
    _changeDefaultAddress = (id) => {
        this.props.changeMyDefaultAddress(id)
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
        if (name && telephone && telephone.length > 6 && telephone.length < 12 && address) {
            this.props.addMyAddress(payload)
            this.props.navigation.goBack(null)
        } else {
            this._existAlert(payload)
        }
    }
    // 编辑地址保存
    _editSaveAddress = (payload) => {
        const { name, telephone, address } = payload
        if (name && telephone && telephone.length > 6 && telephone.length < 12 && address) {
            this.props.changeMyAddress(payload)
            this.props.navigation.goBack(null)
        } else {
            this._existAlert(payload)
        }
    }
    // 列举警告的情况
    _existAlert = (payload) => {
        const { name, telephone, address } = payload
        if (!name) {
            this._alert('请填写收货人姓名')
        } else if (!telephone) {
            this._alert('请填写联系电话')
        } else if (telephone.length < 6 || telephone.length > 11) {
            this._alert('请填写正确的手机号码')
        } else if (!address) {
            this._alert('请填写详细地址')
        }
    }
    // 警告
    _alert = (content) => {
        alert(content, '', [
            { text: '确定', onPress: () => console.log(content) },
        ])
    }
    render() {
        const { address, navigation } = this.props
        const height = Dimensions.get('window').height - 90 - 70
        return <View>
            <ScrollView style={{height: height}}>
                {
                    address.map((a, index) => {
                        return <MyAddressListComponent address={a} navigation={navigation} key={index}
                            _changeDefaultAddress={this._changeDefaultAddress} _deleteAddress={this._deleteAddress}
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
        changeMyDefaultAddress,
        changeMyAddress,
        deleteMyAddress,
        addMyAddress
    }
)(Profile)