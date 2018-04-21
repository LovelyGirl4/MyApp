import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Modal, List, InputItem, TextareaItem, Picker } from 'antd-mobile'
import { createForm } from 'rc-form'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

import area from '../../utils/area.json'

const Item = List.Item
// 省市区数据
const data = area.map((province, p) => {
    const cities = province.children.map((city, c) => {
        const districts = city.children.map((district, d) => {
            return {
                label: district,
                value: district
            }
        })
        return {
            label: city.name,
            value: city.name,
            children: districts
        }
    })
    return {
        label: province.name,
        value: province.name,
        children: cities
    }
})


class Address extends PureComponent {
    constructor(props) {
        super(props)
    }

    _onChange = (key) => (val) => {
        const { navigation } = this.props
        navigation.setParams({
            address: {
                ...navigation.state.params.address,
                [key]: val
            }
        })
    }

    _onCheckChange = () => {
        const { navigation } = this.props
        navigation.setParams({
            address: {
                ...navigation.state.params.address,
                checked: !navigation.state.params.address.checked
            }
        })
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form
        const { id, name, telephone, district, address, checked } = this.props.navigation.state.params.address

        return (
            <View>
                <List
                    // renderHeader={() => 'Form Validation'}
                    // renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}
                >
                    <InputItem
                        {...getFieldProps('autofocus', {
                            // initialValue: 'little ant',
                            rules: [
                                { required: true, message: '请输入收货人姓名' },
                                { validator: this.validateAccount },
                            ],
                        })}
                        clear
                        error={!!getFieldError('autofocus')}
                        onErrorClick={() => {
                            alert(getFieldError('autofocus').join('、'))
                        }}
                        placeholder="请输入姓名"
                        value={name}
                        onChange={this._onChange('name')}
                    >收货人</InputItem>
                    <InputItem
                        {...getFieldProps('phone', {
                            rules: [
                                { required: true, message: '请输入收货人联系电话' },
                                { validator: this.validateAccount },
                            ],
                        })}
                        type="phone"
                        placeholder="请输入联系电话"
                        value={telephone}
                        onChange={this._onChange('telephone')}
                    >联系电话</InputItem>
                    <Picker
                        data={data}
                        // title="Areas"
                        {...getFieldProps('district', {
                            // initialValue: ['340000', '341500', '341502'],
                        })}
                        onOk={this._onChange('district')}
                        onDismiss={e => console.log('dismiss', e)}
                        value={district}
                        format={(labels) => {
                            return <Text style={styles.label}>
                                {labels.length === 0 ? '请选择' : labels.join(',')}
                            </Text>
                        }}
                    >
                        <Item arrow="horizontal">所在地区</Item>
                    </Picker>
                    <TextareaItem rows={3} placeholder='详细地址' style={{marginLeft: 10}}
                        value={address} onChange={this._onChange('address')}/>
                </List>
                <List style={{ marginTop: 15 }}>
                    <Item extra={<Icon name={checked ? 'check-square' : 'square-o'} color={checked ? '#40a9ff' : 'grey'} size={24} />}
                        onClick={this._onCheckChange}>
                        设为默认地址
                    </Item>
                </List>
            </View>
        )
    }
}

const AddressWrapper = createForm()(Address)

export default AddressWrapper
