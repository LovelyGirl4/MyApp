import { Dimensions, Platform, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')

const scale = width / 1334
const navHeight = Platform.OS === 'ios' ? 128 * scale : StatusBar.currentHeight + 40 * scale

export {
    width,
    height,
    navHeight,
}

