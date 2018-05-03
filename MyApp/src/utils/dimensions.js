import { Dimensions, Platform, StatusBar } from 'react-native'

// tab页的head和foot的高度
export const tabHeaderHeight = 45
export const tabFooterHeight = 50

export const headerHeight = 45

// 屏幕的高宽
export const height = Dimensions.get('window').height
export const width = Dimensions.get('window').width
// 内部滑动的高度
export const bodyHeight = height - tabHeaderHeight - tabFooterHeight
