import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'

export const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
})
// 保存数据
export const saveStorage = (key, id, data, expires = null) => {
    storage.save({
        key: key,
        id: id,
        data: data,
        expires: expires // 设为null，则永不过期
    })
}
// 读取数据
export const loadStorage = (key, id) => {
    storage.load({
        key: key,
        id: id
    }).then(res => {
        // 如果找到数据，则在then方法中返回
        console.log('res:', res)
        return res
    }).catch(err => {
        console.warn(err.message)
        switch (err.name) {
        case 'NotFoundError':
            // TODO;
            break
        case 'ExpiredError':
            // TODO
            break
        }
    })
}