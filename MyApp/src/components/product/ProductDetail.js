import React, {PureComponent} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button, Flex, List, Modal, Tag } from 'antd-mobile'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'

class ProductDetail extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }
    _showModal = (e) => {
        e.preventDefault() // 修复 Android 上点击穿透
        this.setState({
            showModal: true
        })
    }
    _closeModal = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        const { name, id, images, product_id } = this.props.navigation.state.params.item
        const { showModal } = this.state
        const source = images.length > 0 ? { uri: baseURL(images[0].url) } : noPicture

        return <View>
            <Image source={source} style={styles.img} />
            <Text style={styles.price}>￥ 200</Text>
            <Text>{name}</Text>
            <Flex>
                <Flex.Item>
                    <Button type="primary" inline onClick={this._showModal}>加入购物车</Button>
                </Flex.Item>
                <Flex.Item>
                    <Button type="warning" inline onClick={this._showModal}>立即购买</Button>
                </Flex.Item>
            </Flex>
            <Modal
                popup
                visible={showModal}
                closable
                maskClosable
                onClose={this._closeModal}
                animationType="slide-up"
            >
                <View style={styles.modalView}>
                    <Flex>
                        <Flex.Item>
                            <Image source={source} style={styles.miniImg} />
                        </Flex.Item>
                        <Flex.Item style={{flex: 2}}>
                            <Text style={styles.price}>￥ 200</Text>
                            <Text>库存200件</Text>
                            <Text>请选择口味</Text>
                        </Flex.Item>
                    </Flex>
                    <Text style={styles.tagTitle}>口味</Text>
                    <Text style={styles.tagContainer}>
                        {['不辣', '微辣', '香辣', '麻辣'].map((i, index) => (
                            <Tag key={index}>{i}</Tag>
                        ))}
                    </Text>
                    <Button type="warning" onClick={this._closeModal}>确定</Button>
                </View>
            </Modal>
        </View>
    }
}

export default ProductDetail

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 250
    },
    miniImg: {
        width: 100,
        height: 100
    },
    price: {
        fontSize: 18,
        color: 'red'
    },
    modalView: {
        marginLeft: 20,
        marginRight: 20,
    },
    tagTitle: {
        fontSize: 18,
        marginTop: 20,
    },
    tagContainer: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 0.8,
        borderColor: '#ccc'
    }
})