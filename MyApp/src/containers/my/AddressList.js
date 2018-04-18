import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'antd-mobile'
import { MyAddressListComponent } from '../../components/index'
import { changeMyDefaultAddress, deleteMyAddress } from '../../actions/myAction'


class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchMyProfile()
    }
    _changeDefaultAddress = (id) => {
        this.props.changeMyDefaultAddress(id)
    }
    _deleteAddress = (id) => {
        this.props.deleteMyAddress(id)
    }
    render() {
        const { address, navigation } = this.props
        const height = Dimensions.get('window').height - 90 - 70
        return <View>
            <ScrollView style={{height: height}}>
                {
                    address.map((a, index) => {
                        return <MyAddressListComponent address={a} navigation={navigation} key={index}
                            _changeDefaultAddress={this._changeDefaultAddress} _deleteAddress={this._deleteAddress} />
                    })
                }
            </ScrollView>
            <View style={{height: 60}}>
                <Button type='primary'>添加新地址</Button>
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
        deleteMyAddress
    }
)(Profile)