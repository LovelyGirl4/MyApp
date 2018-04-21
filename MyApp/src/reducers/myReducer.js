import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    profile: {},
    address: [
        {
            id: 0,
            name: '王小花',
            telephone: '13866668888',
            district: ['浙江省', '杭州市', '滨江区'],
            address: '海创基地北楼',
            checked: true
        },
        {
            id: 1,
            name: '小小酥',
            telephone: '13866668888',
            district: ['浙江省', '杭州市', '滨江区'],
            address: '骆家庄西苑一区99号',
            checked: false
        }
    ]
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.FETCH_MY_PROFILE_SUCCESS:
        return { ...state, profile: action.profile }
    case ActionTypes.UPDATE_MY_DEFAULT_ADDRESS_SUCCESS:
        return { ...state, address: action.address }
    case ActionTypes.UPDATE_MY_ADDRESS_SUCCESS:
        return { ...state, address: action.address }
    case ActionTypes.DELETE_MY_ADDRESS_SUCCESS:
        return { ...state, address: action.address}
    case ActionTypes.ADD_MY_ADDRESS_SUCCESS:
        return { ...state, address: action.address }
    default:
        return state
    }
}

const ui = createAsyncUIReducer({
    fetchProfileUI: ActionTypes.FETCH_MY_PROFILE
})

export default combineReducers({
    data,
    ui
})
