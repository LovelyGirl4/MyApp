import { Modal } from 'antd-mobile'

const alert = Modal.alert

// 警告
export const _alert = (content) => {
    alert(content, '', [
        { text: '确定', onPress: () => console.log(content) },
    ])
}