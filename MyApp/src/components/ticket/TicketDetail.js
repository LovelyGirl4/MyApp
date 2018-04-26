import React, { PureComponent } from 'react'
import { Text, View, TextInput, Image, CheckBox, ScrollView } from 'react-native'
import { Flex, WhiteSpace, List, Tag, Button } from 'antd-mobile'
import Icon from 'react-native-vector-icons/Entypo'
import noPicture from '../../asset/no_picture.gif'
import { baseURL } from '../../common/index'
import styles from './styles'

const Item = List.Item
const Brief = Item.Brief

export default class TicketDetail extends PureComponent {
    constructor(props) {
        super(props)
    }


    render() {
        const { navigation, _toTicketOrder } = this.props
        const { id, name, images } = navigation.state.params.ticket
        const source = images.length > 0 ? { uri: baseURL(images[0].url) } : noPicture
        return <ScrollView>
            <Image source={source} style={styles.viewImg} />
            <List>
                <Item arrow='horizontal' extra='238条评价' style={styles.viewTitle}>
                    <Text style={styles.viewName}>{name}</Text>
                    <Brief>4.8分</Brief>
                </Item>
                <Item arrow='horizontal' extra='地图' style={styles.viewItem}>
                    具体地址
                </Item>
                <Item arrow='horizontal' extra='简介' style={styles.viewItem}>
                    具体介绍
                </Item>
            </List>
            <WhiteSpace/>
            <List>
                <Item>
                    <Text style={styles.viewName}>
                        <Icon name='tree' color='#008AE6' size={22}/>    
                        &nbsp;门票
                    </Text>
                </Item>
                <Item
                    extra={<Button type='warning' style={styles.button} onClick={_toTicketOrder}>￥20</Button>}
                    style={styles.ticketItem}
                >
                    杭州动物园成人票
                    <Text style={styles.ticketTag}>
                        随买随用 游玩日17:00前均可使用
                    </Text>
                    <View style={styles.ticketTags}>
                        {['有条件退', '无需换票', '已售1611'].map((content, index) => {
                            return <View style={styles.tagView} key={index}>
                                <Text style={styles.tag}>{content}</Text>
                            </View>
                        })}
                    </View>
                </Item>
                <Item
                    extra={<Button type='warning' style={styles.button} onClick={_toTicketOrder}>
                        ￥40
                    </Button>}
                    style={styles.ticketItem}
                >
                    杭州动物园双人票
                    <Text style={styles.ticketTag}>
                        随买随用 游玩日16:00前均可使用
                    </Text>
                    <View style={styles.ticketTags}>
                        {['有条件退', '无需换票', '已售1611'].map((content, index) => {
                            return <View style={styles.tagView} key={index}>
                                <Text style={styles.tag}>{content}</Text>
                            </View>
                        })}
                    </View>
                </Item>
            </List>
        </ScrollView>
    }
}