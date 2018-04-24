import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button, Flex, List, Modal, Tag, Stepper } from 'antd-mobile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'

class ProductModal extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const { item, number, showModal, _closeModal, _sure } = this.props
        const { name, id, images } = item
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
                <View style={styles.stepperView}>
                    <View style={styles.buyView}>
                        <Text style={styles.buy}>购买数量</Text>
                    </View>
                    <View style={styles.numberView}>
                        <Stepper
                            style={{ width: 120 }}
                            max={100}
                            min={1}
                            value={number}
                            onChange={this.props._changeNumber}
                        />
                    </View>
                </View>
                <Button type="warning" onClick={() => _sure(id)} style={styles.button}>确定</Button>
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
    stepperView: {
        flex: 2,
        flexDirection: 'row',
        borderBottomWidth: 0.6,
        borderColor: '#ccc',
        // height: 55,
        marginTop: 10,
        justifyContent: 'center',
    },
    buyView: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
    },
    buy: {
        fontSize: 20,
    },
    numberView: {
        flex: 1,
        alignItems: 'flex-end'
    },
    button: {
        marginTop: 10,
        marginBottom: 10
    }
})