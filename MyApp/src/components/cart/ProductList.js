import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, Text, View, TextInput, StyleSheet, Image } from 'react-native'
import { Flex, WhiteSpace, Checkbox, Tag } from 'antd-mobile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'
import ProductNumber from './ProductNumber'
// import CustomToastAndroid from '../../../js/ToastAndroid'

const CheckboxItem = Checkbox.CheckboxItem

class ProductList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            indexText: '',
            check: false,
        }
        this.dataContainer = []
    }

    componentDidMount() {
        this.setState({
            sourceData: this.dataContainer
        })
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
    _changeCheck = () => {
        this.setState({
            check: !this.state.check
        })
    }

    // Header布局
    _renderHeader = () => {
        return null
    }

    // Footer布局
    _renderFooter = () => (
        <View><Text>Footer</Text></View>
    )

    // 自定义分割线
    _renderItemSeparatorComponent = ({ highlighted }) => (
        <View style={styles.splitLine}></View>
    )

    // 空布局
    _renderEmptyView = () => (
        <View><Text>EmptyView</Text></View>
    )

    // 下拉刷新
    _renderRefresh = () => {
        this.setState({ refreshing: true })//开始刷新
        this.props.fetchCartProducts()
        //这里模拟请求网络，拿到数据，3s后停止刷新
        setTimeout(() => {
            // CustomToastAndroid.show('没有可刷新的内容！', CustomToastAndroid.SHORT)
            this.setState({ refreshing: false })
        }, 3000)
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
        const { name, id, images, product_id, count } = item
        const source = images.length > 0 ? { uri: baseURL(images[0].url) } : noPicture
        return (
            <CheckboxItem>
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
                                <ProductNumber count={count} />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                </Flex>
            </CheckboxItem>
        )
    };

    render() {
        const { check } = this.state
        const { cartProducts } = this.props
        const data = cartProducts && cartProducts.map((t, index) => {
            return { ...t, key: index }
        })
        return (
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
                refreshing={this.state.refreshing}
                onRefresh={this._renderRefresh}
                // 是一个可选的优化，用于避免动态测量内容；+50是加上Header的高度
                getItemLayout={(data, index) => ({ length: 40, offset: (40 + 1) * Number(index + 50), index })}
            />
        )
    }
}



export default ProductList

const styles = StyleSheet.create({
    headRow: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        borderTopWidth: 0.7,
        borderBottomWidth: 0.7,
        borderColor: '#ddd'
    },
    headCol: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        borderRightWidth: 0.7
    },
    headColLast: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headText: {
        fontSize: 16,
    },
    splitLine: {
        height: 0.8,
        backgroundColor: '#fff',
        marginLeft: 15,
        marginRight: 15
    },
    grid: {
        height: 100,
        marginLeft: 15,
        marginRight: 15
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    img: {
        height: 70,
        width: 70,
        marginTop: 10,
    },
    title: {
        fontSize: 16,
        // justifyContent: 'flex-start'
    },
    comment: {
        color: '#5da8ff'
    },
    price: {
        fontSize: 18,
        color: 'red'
    }
})

