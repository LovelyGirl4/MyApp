import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, Text, View, TextInput, StyleSheet, Image } from 'react-native'
import { Flex, WhiteSpace } from 'antd-mobile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'
import Loading from '../loading/Loading'
import { debonceFn } from '../../common/index'
// import CustomToastAndroid from '../../../js/ToastAndroid'


class ProductList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            sourceData: [],
            refreshing: false,
            indexText: '',
            check: false
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
        // this.setState((state) => {
        //     const selected = new Map(state.selected)
        //     selected.set(id, !selected.get(id))
        //     return { selected }
        // })
        this.props.navigation.navigate('ProductDetail', { id: item.id, item: item })
        // CustomToastAndroid.show(JSON.stringify(id), CustomToastAndroid.SHORT)
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
        const { check } = this.state
        return <View>
            <Flex style={styles.headRow}>
                <Flex.Item style={styles.headCol}>
                    <Text style={styles.headText}>综合<Icon name='chevron-down' /></Text>
                </Flex.Item>
                <Flex.Item style={styles.headCol}>
                    <Text style={styles.headText}>销量</Text>
                </Flex.Item>
            </Flex>
        </View>
        // <View style={{ flexDirection: 'row' }}>
        //     <TextInput
        //         style={{ height: 50, flex: 1 }}
        //         placeholder='请输入行号'
        //         onChangeText={(text) => { this.setState({ indexText: text }) }}
        //     />
        //     <TouchableOpacity
        //         onPress={this._doActionToItem}
        //         style={{ height: 50, width: 90, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}
        //     >
        //         <Text style={{ color: '#fff' }}>跳转到指定行</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity
        //         onPress={this._doActionToBottom}
        //         style={{ height: 50, width: 90, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
        //     >
        //         <Text style={{ color: '#fff' }}>跳转到底部</Text>
        //     </TouchableOpacity>
        // </View>
    };

    // Footer布局
    _renderFooter = () => (
        <View><Text>Footer</Text></View>
    );

    // 自定义分割线
    _renderItemSeparatorComponent = ({ highlighted }) => (
        <View style={styles.splitLine}></View>
    );

    // 空布局
    _renderEmptyView = () => (
        <View><Text>EmptyView</Text></View>
    );

    // 下拉刷新
    _renderRefresh = () => {
        this.setState({ refreshing: true })//开始刷新
        //这里模拟请求网络，拿到数据，3s后停止刷新
        setTimeout(() => {
            // CustomToastAndroid.show('没有可刷新的内容！', CustomToastAndroid.SHORT)
            this.setState({ refreshing: false })
        }, 3000)
    };

    // 上拉加载更多
    _onEndReached = () => {
        const { current_page, total_page } = this.props.pagination
        if (current_page !== total_page) {
            this.props.fetchProducts({ current_page: current_page + 1 })
        }
    };

    _renderItem = ({ item }) => {
        const { name, id, images, product_id } = item
        const source = images.length > 0 ? { uri: baseURL(images[0].url) } : noPicture
        return (
            <TouchableOpacity
                id={id}
                activeOpacity={0.8}
                // selected={!!this.state.selected.get(item.id)}
                onPress={() => this._onPressItem(item)}
                style={styles.grid}
            >
                <Flex>
                    <Flex.Item>
                        <Image source={source} style={styles.img} />
                    </Flex.Item>
                    <Flex.Item style={{ flex: 3 }}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.price}>￥200</Text>
                        <Text>100人付款</Text>
                    </Flex.Item>
                </Flex>
            </TouchableOpacity>
        )
    };

    render() {
        const { check } = this.state
        const { products, pagination, fetchProductsUI } = this.props
        const data = products && products.map((t, index) => {
            return { ...t, key: index }
        })
        return (
            <View>
                <FlatList
                    ref={ref => this.flatList = ref}
                    data={data}
                    extraData={this.state.selected}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    // 决定当距离内容最底部还有多远时触发onEndReached回调；数值范围0~1，例如：0.5表示可见布局的最底端距离content最底端等于可见布局一半高度的时候调用该回调
                    onEndReachedThreshold={0.1}
                    // 当列表被滚动到距离内容最底部不足onEndReacchedThreshold设置的距离时调用
                    onEndReached={debonceFn(500, this._onEndReached)}
                    ListHeaderComponent={this._renderHeader}
                    ListFooterComponent={this._renderFooter}
                    ItemSeparatorComponent={this._renderItemSeparatorComponent}
                    ListEmptyComponent={this._renderEmptyView}
                    refreshing={this.state.refreshing}
                    onRefresh={this._renderRefresh}
                    // 是一个可选的优化，用于避免动态测量内容；+50是加上Header的高度
                    getItemLayout={(data, index) => ({ length: 40, offset: (40 + 1) * Number(index + 50), index })}
                />
                {/*{fetchProductsUI ? <Loading/> : null}*/}
            </View>
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
        backgroundColor: '#ddd',
        marginLeft: 20,
        marginRight: 20
    },
    grid: {
        height: 100,
        marginLeft: 20,
        marginRight: 20
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    img: {
        height: 70,
        width: 70,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        justifyContent: 'flex-start'
    },
    comment: {
        color: '#5da8ff'
    },
    price: {
        fontSize: 18,
        color: 'red'
    }
})

