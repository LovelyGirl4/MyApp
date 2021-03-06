import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Modal } from 'antd-mobile'
import styles from './styles'
import OperationIcon from 'react-native-vector-icons/EvilIcons'
import Icon from 'react-native-vector-icons/FontAwesome'

const alert = Modal.alert

export default class AddressList extends PureComponent {
    constructor(props) {
        super(props)
    }

    _delete = (id) => {
        alert('确定要删除该地址吗？', ' ', [
            { text: '取消', onPress: () => console.log('cancel'), style: {color: 'grey'} },
            { text: '删除', onPress: () => this.props._deleteAddress(id) },
        ])
    }

    _edit = () => {
        const {address} = this.props
        this.props.navigation.navigate('EditAddress', {
            id: address.id,
            address: address,
            _editSaveAddress: this.props._editSaveAddress
        })
    }
    
    render() {
        const { id, name, telephone, district, address, checked } = this.props.address
        return (
            <View style={styles.addressContainer}>
                <View style={styles.headView}>
                    <Text style={styles.name} onPress={this._edit}>{name}</Text>
                    <Text style={styles.tel} onPress={this._edit}>{telephone}</Text>
                </View>
                <View style={styles.addressView}>
                    <Text style={styles.address} onPress={this._edit}>
                        {district.join('')}{address}
                    </Text>
                </View>
                <View style={styles.operationView}>
                    <Text onPress={() => this.props._updateDefaultAddress(id)} style={styles.default}>
                        <Icon name={checked ? 'check-square' : 'square-o'} color={checked ? '#40a9ff' : 'grey'} size={24} />
                        <Text style={{ color: checked ? '#40a9ff' : 'black'}}>&nbsp;&nbsp;&nbsp;{checked ? '默认地址' : '设为默认'}</Text>
                    </Text>
                    <Text onPress={this._edit} style={styles.edit}>
                        <OperationIcon name='pencil' color='grey' size={25} />&nbsp;编辑
                    </Text>
                    <Text onPress={() => this._delete(id)} style={styles.del}>
                        <OperationIcon name='trash' color='grey' size={25} />&nbsp;删除
                    </Text>
                </View>
            </View>
        )
    }
}