import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Modal, List, InputItem, TextareaItem, Picker } from 'antd-mobile'
import { createForm } from 'rc-form'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const Item = List.Item

const district = [
    {
        label: '安徽省',
        value: '安徽省',
        children: [
            {
                label: '合肥市',
                value: '合肥市',
                children: [
                    {
                        label: '肥西县',
                        value: '肥西县'
                    }
                ]
            },
            {
                label: '六安市',
                value: '六安市',
                children: [
                    {
                        label: '舒城县',
                        value: '舒城县'
                    }
                ]
            }
        ]
    },
    {
        label: '浙江省',
        value: '浙江省',
        children: [
            {
                label: '杭州市',
                value: '杭州市',
                children: [
                    {
                        label: '滨江区',
                        value: '滨江区'
                    },
                    {
                        label: '西湖区',
                        value: '西湖区'
                    }
                ]
            },
            {
                label: '宁波市',
                value: '宁波市',
                children: [
                    {
                        label: '江北区',
                        value: '江北区'
                    },
                    {
                        label: '海曙区',
                        value: '海曙区'
                    }
                ]
            }
        ]
    }
]

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
        const { id, name, telephone, address, checked } = this.props.navigation.state.params.address

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
                    <Picker extra="请选择"
                        data={district}
                        // title="Areas"
                        {...getFieldProps('district', {
                            // initialValue: ['340000', '341500', '341502'],
                        })}
                        onOk={e => console.log('ok', e)}
                        onDismiss={e => console.log('dismiss', e)}
                        value={address ? [address.slice(0, 3), address.slice(3, 6), address.slice(6, 9)] : undefined}
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
