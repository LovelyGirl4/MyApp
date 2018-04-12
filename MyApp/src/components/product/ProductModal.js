import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button, Flex, List, Modal, Tag } from 'antd-mobile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'

class ProductModal extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            number: 1
        }
    }
    _minusNumber = () => {
        const { number } = this.state
        this.setState({
            number: number === 1 ? 1 : number - 1
        })
    }
    _plusNumber = () => {
        const { number } = this.state
        this.setState({
            number: number + 1
        })
    }
    render() {
        const { item, showModal, _closeModal } = this.props
        const { name, id, images, product_id } = item
        const {number} = this.state
        const source = images.length > 0 ? { uri: baseURL(images[0].url) } : noPicture
        return (<Modal
            popup
            visible={showModal}
            closable
            maskClosable
            onClose={_closeModal}
            animationType="slide-up"
        >
            <View style={styles.modalView}>
                <Flex>
                    <Flex.Item>
                        <Image source={source} style={styles.miniImg} />
                    </Flex.Item>
                    <Flex.Item style={{ flex: 2 }}>
                        <Text style={styles.price}>￥ 200</Text>
                        <Text>库存200件</Text>
                        <Text>请选择口味</Text>
                    </Flex.Item>
                </Flex>
                <View style={styles.tagView}>
                    <Text style={styles.tagTitle}>口味</Text>
                    <Text style={styles.tagContainer}>
                        {['不辣', '微辣', '香辣', '麻辣'].map((i, index) => (
                            <Tag key={index}>{i}</Tag>
                        ))}
                    </Text>
                </View>
                <View style={styles.iconView}>
                    <Flex>
                        <Flex.Item>
                            <View style={styles.centerView}>
                                <Text style={styles.tagTitle}>购买数量</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <Text style={styles.iconContainer}>
                                <Text onPress={this._minusNumber}>
                                    <Icon name='minus-box' size={40} color='#CCC' />
                                </Text>
                                {/*<View style={styles.numberView}>
                                    <Text>{number}</Text>
                                </View>*/}
                                <Text>{number}</Text>
                                <Text onPress={this._plusNumber}>
                                    <Icon name='plus-box' size={40} color='#CCC' />
                                </Text>
                            </Text>
                        </Flex.Item>
                    </Flex>
                </View>
                <Button type="warning" onClick={_closeModal} style={styles.button}>确定</Button>
            </View>
        </Modal>)
    }
}

export default ProductModal
const styles = StyleSheet.create({
    miniImg: {
        width: 100,
        height: 100
    },
    price: {
        fontSize: 18,
        color: 'red'
    },
    modalView: {
        marginLeft: 15,
        marginRight: 15,
    },
    tagView: {
        borderBottomWidth: 0.6,
        borderColor: '#ccc',
        // height: 80
    },
    iconView: {
        borderBottomWidth: 0.6,
        borderColor: '#ccc',
        // height: 55,
        marginTop: 10,
        justifyContent: 'center',
    },
    tagTitle: {
        fontSize: 20,
        marginTop: 20,
        alignItems: 'center'
    },
    tagContainer: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    iconContainer: {
        textAlign: 'right'
    },
    numberView: {
        height: 40,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerView: {
        height: 50,
        justifyContent: 'center',
        marginBottom: 10
    },
    button: {
        marginTop: 10,
        marginBottom: 10
    }
})