import React, { Component } from 'react'
import { View, Animated, Easing } from 'react-native'
import { Modal } from 'antd-mobile'
import Icon from 'react-native-vector-icons/EvilIcons'
import styles from './styles'

export default class Loading extends Component {
    state = {
        rotateVal: new Animated.Value(0),
    }

    componentDidMount() { // 组件加载完成后启动动画
        const animationLoading = Animated.timing(
            this.state.rotateVal, // 初始值
            {
                toValue: 1080, // 终点值
                easing: Easing.linear, // 这里使用匀速曲线，详见RN-api-Easing
            }
        )
        Animated.loop(animationLoading).start() // 开始动画
        // setTimeout(Animated.loop(animationLoading).stop, 5000) // 5秒后停止动画，可用于任意时刻停止动画
    }

    render() {
        return (
            <Modal
                visible={true}
                transparent
                style={styles.modal}
            >
                <View>
                    <Animated.Text
                        style={{
                            textAlign: 'center',
                            fontSize: 34,
                            fontFamily: 'iconfont',
                            transform: [{ // 动画属性
                                rotate: this.state.rotateVal.interpolate({
                                    inputRange: [0, 360],
                                    outputRange: ['0deg', '360deg'],
                                })
                            }]
                        }}>
                        <Icon name='spinner' size={40} color='#40a9ff' />
                    </Animated.Text>
                </View>
            </Modal>
        )
    }
}