import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, Text, View, ScrollView,
    Image, Dimensions } from 'react-native'
import { Flex, Checkbox, Tag, Modal, Button, Toast } from 'antd-mobile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'
import ProductNumber from './ProductNumber'
import styles from './styles'

const alert = Modal.alert

// import CustomToastAndroid from '../../../js/ToastAndroid'

const CheckboxItem = Checkbox.CheckboxItem

class ProductList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            check: false,
        }
    }

    componentDidMount() {

    }

    _keyExtractor = (item, index) => (item.id).toString()
    _onPressItem = (item) => {
        // 跳回产品详情页
        this.props.navigation.navigate('ProductDetail', { id: item.id, item: item })
    };

    // 跳转到指定位置
    _doActionToItem = () => {
        // viewPosition: 指定选定行显示的位置，0代表top，0.5代表middle，1代表bottom
        this.flatList.scrollToIndex({ viewPosition: 0, index: this.state.indexText })
    };

    // 跳转到内容最底端
    _doActionToBottom = () => {
        this.flatList.scrollToEnd()
    };

    // 改变check选中
    _changeCheck = (id, check) => {
        this.props.updateCartProductChecked(id, check)
    }

    // Header布局
    _renderHeader = () => {
        return null
    }

    // Footer布局
    _renderFooter = () => {
        return null
    }

    // 自定义分割线
    _renderItemSeparatorComponent = ({ highlighted }) => (
        <View style={styles.splitLine}></View>
    )

    // 空布局
    _renderEmptyView = () => (
        <View style={styles.emptyView}>
            <Icon name='cart-outline' color='grey' size={50}/>
            <Text style={styles.emptyText}>购物车空空如也~</Text>
            <Button type='primary' style={styles.emptyButton} onClick={this._toProductList}>去逛逛</Button>
        </View>
    )

    // 下拉刷新
    _renderRefresh = () => {
        this.props.fetchCartProducts()
    }

    // 上拉加载更多
    // _onEndReached = () => {
    //     const { current_page, total_page } = this.props.pagination
    //     if (current_page !== total_page) {
    //         this.props.fetchProducts({ current_page: current_page + 1 })
    //     }
    // }

    // FlatList item
    _renderItem = ({ item }) => {
        const { name, id, images, product_id, count, checked } = item
        const source = images.length > 0 ? { uri: baseURL(images[0].url) } : noPicture
        return (
            <CheckboxItem onChange={(e) => this._changeCheck(id, e.target.checked)} checked={checked}>
                <Flex style={styles.grid}>
                    <Flex.Item>
                        <TouchableOpacity
                            id={id}
                            activeOpacity={0.8}
                            onPress={() => this._onPressItem(item)}
                        >
                            <Image source={source} style={styles.img} />
                        </TouchableOpacity>
                    </Flex.Item>
                    <Flex.Item style={{ flex: 3 }}>
                        <Text style={styles.title} onPress={() => this._onPressItem(item)}>{name}</Text>
                        <Tag selected>香辣</Tag>
                        <Flex>
                            <Flex.Item>
                                <Text style={styles.price}>￥200</Text>
                            </Flex.Item>
                            <Flex.Item>
                                <ProductNumber count={count} updateCartProductNumber={(val) => this.props.updateCartProductNumber(id, val)} />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                </Flex>
            </CheckboxItem>
        )
    }

    // 选中所有
    _checkChange = () => {
        this.props.updateCartAllProductsChecked(!this.state.check)
        this.setState({
            check: !this.state.check
        })
    }
    //删除商品
    _deleteProducts = () => {
        alert('确认要删除这些商品吗？', ' ', [
            { text: '我再想想', onPress: () => console.log('cancel'), style: {color: 'grey'} },
            { text: '确定', onPress: () => this.props.deleteCartProducts() },
        ])
    }
    // 再去逛逛
    _toProductList = () => {
        this.props.navigation.navigate('Product')
    }
    // 下订单
    _makeOrder = (count) => {
        if (count === 0) {
            Toast.info('您还没有选择宝贝哦!', 1)
        } else {
            this.props.addProductOrder()
            this.props.navigation.navigate('ProductOrder')
        }
    }
    render() {
        const { check } = this.state
        const { cartProducts, cartEdit, fetchCartProductsUI } = this.props

        const height = Dimensions.get('window').height - 90 - 80

        let sumCount = 0, sumMoney = 0
        const data = cartProducts.map((t, index) => {
            if (t.checked === true) {
                sumMoney = sumMoney + t.count * 200
                sumCount = sumCount + 1
            }
            return { ...t, key: index }
        })
        return (
            <View>
                <ScrollView style={{ height: height }}>
                    <FlatList
                        ref={ref => this.flatList = ref}
                        data={data}
                        extraData={this.state.selected}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        // 决定当距离内容最底部还有多远时触发onEndReached回调；数值范围0~1，例如：0.5表示可见布局的最底端距离content最底端等于可见布局一半高度的时候调用该回调
                        onEndReachedThreshold={0.1}
                        // 当列表被滚动到距离内容最底部不足onEndReacchedThreshold设置的距离时调用
                        // onEndReached={this._onEndReached}
                        ListHeaderComponent={this._renderHeader}
                        ListFooterComponent={this._renderFooter}
                        ItemSeparatorComponent={this._renderItemSeparatorComponent} // 自定义分割线
                        ListEmptyComponent={this._renderEmptyView}
                        refreshing={fetchCartProductsUI}
                        onRefresh={this._renderRefresh}
                        // 是一个可选的优化，用于避免动态测量内容；+50是加上Header的高度
                        // getItemLayout={(data, index) => ({ length: 40, offset: (40 + 1) * Number(index + 50), index })}
                    />
                </ScrollView>
                {
                    data.length > 0 ? <View style={styles.footer}>
                        <View style={styles.check}>
                            <Text onPress={this._checkChange}>
                                <Icon name={check ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
                                    color={check ? '#40a9ff' : '#bfbfbf'} size={26} />
                            </Text>
                            <Text style={styles.checkAll}>全选</Text>
                        </View>
                        <View style={styles.sumMoney}>
                            <Text style={{ color: '#ccc' }}>{sumMoney > 0 ? '不含运费' : null}</Text>
                            <Text style={{ fontSize: 18 }}>合计:</Text>
                            <Text style={styles.price}>￥{sumMoney}</Text>
                        </View>
                        <View style={sumCount > 0 ? styles.sumCountTrue : styles.sumCountFalse}>
                            {
                                cartEdit ? <Text style={styles.sumCountText} onPress={sumCount > 0 ? this._deleteProducts : null}>删除</Text> :
                                    <Text style={styles.sumCountText} onPress={() => this._makeOrder(sumCount)}>结算({sumCount})</Text>
                            }
                        </View>
                    </View> : null
                }
            </View>
        )
    }
}

export default ProductList

