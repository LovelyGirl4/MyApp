import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, Text, View, TextInput, Image, CheckBox } from 'react-native'
import { Flex, WhiteSpace } from 'antd-mobile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'
import styles from './styles'
// import CustomToastAndroid from '../../../js/ToastAndroid'


export default class TicketList extends PureComponent {

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
        // 初始化数据
        // for (let i = 0; i < 20; i++) {
        //     let obj = {
        //         id: i,
        //         title: i + '只柯基'
        //     }

        //     this.dataContainer.push(obj)
        // }

        this.setState({
            sourceData: this.dataContainer
        })
    }
    _keyExtractor = (item, index) => (item.id).toString()
    _onPressItem = (id) => {
        this.setState((state) => {
            const selected = new Map(state.selected)
            selected.set(id, !selected.get(id))
            return { selected }
        })

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

    // 进入门票详情
    _toTicketDetail = (item) => {
        this.props.navigation.navigate('TicketDetail', {
            id: item.id,
            ticket: item
        })
    }

    // Header布局
    _renderHeader = () => {
        const {check} = this.state
        return <Flex style={styles.headRow}>
            <Flex.Item style={styles.headCol}>
                <Text style={styles.headText}>
                    全部<Icon name='chevron-down' />
                </Text>
            </Flex.Item>
            <Flex.Item style={styles.headCol}>
                <Text style={styles.headText}>全城<Icon name='chevron-down' /></Text>
            </Flex.Item>
            <Flex.Item style={styles.headCol}>
                <Text style={styles.headText}>智能排序<Icon name='chevron-down' /></Text>
            </Flex.Item>
            <Flex.Item style={styles.headColLast}>
                <Text onPress={this._changeCheck} style={styles.headText}>
                    <Icon name={check ? 'checkbox-marked' : 'checkbox-blank-outline'} color={check ? '#5da8ff' : 'grey'} size={16} />
                    随买随用
                </Text>
            </Flex.Item>
        </Flex>
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
        // let newData = []

        // for (let i = 20; i < 300; i++) {
        //     let obj = {
        //         id: i,
        //         title: i + '生了只小柯基'
        //     }

        //     newData.push(obj)
        // }

        // this.dataContainer = this.dataContainer.concat(newData)
        // this.setState({
        //     sourceData: this.dataContainer
        // })
    };

    _renderItem = ({ item }) => {
        const {name, id, images} = item
        const source = images.length > 0 ? {uri: baseURL(images[0].url)} : noPicture
        return (
            <TouchableOpacity
                id={id}
                activeOpacity={0.8}
                // selected={!!this.state.selected.get(item.id)}
                onPress={() => this._toTicketDetail(item)}
                style={styles.grid}
            >
                <Flex>
                    <Flex.Item>
                        <Image source={source} style={styles.img}/>
                    </Flex.Item>
                    <Flex.Item style={{flex: 3}}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.comment}>很好, 4.8分 | 150000+人消费</Text>
                        <Text style={styles.price}>￥20起</Text>
                    </Flex.Item>
                </Flex>
            </TouchableOpacity>
        )
    };

    render() {
        const {check} = this.state
        const {tickets} = this.props
        const data = tickets && tickets.map((t, index) => {
            return {...t, key: index}
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
                onEndReached={this._onEndReached}
                ListHeaderComponent={this._renderHeader}
                ListFooterComponent={this._renderFooter}
                ItemSeparatorComponent={this._renderItemSeparatorComponent}
                ListEmptyComponent={this._renderEmptyView}
                refreshing={this.state.refreshing}
                onRefresh={this._renderRefresh}
                // 是一个可选的优化，用于避免动态测量内容；+50是加上Header的高度
                getItemLayout={(data, index) => ({ length: 40, offset: (40 + 1) * Number(index + 50), index})}
            />
        )
    }
}

