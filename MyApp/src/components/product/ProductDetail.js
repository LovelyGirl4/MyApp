import React, {PureComponent} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button, Flex, List, Modal, Tag } from 'antd-mobile'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'
import ProductModal from './ProductModal'

class ProductDetail extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
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
    _sure = (id) => {
        this.setState({
            showModal: false
        })
        this.props.addProductToCart(id)
    }
    render() {
        const { item } = this.props.navigation.state.params
        const { name, id, images, product_id } = item
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
            <ProductModal item={item} showModal={showModal} _closeModal={this._closeModal} _sure={this._sure}/>
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
    }
})