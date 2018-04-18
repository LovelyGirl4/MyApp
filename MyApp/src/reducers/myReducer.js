import { combineReducers } from 'redux'
import { FETCH_MY_PROFILE, FETCH_MY_PROFILE_SUCCESS, CHANGE_MY_DEFAULT_ADDRESS_SUCCESS,
    DELETE_MY_ADDRESS_SUCCESS} from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    profile: {},
    address: [
        {
            id: 1,
            name: '王小花',
            telephone: '13866668888',
            address: '浙江省杭州市滨江区海创基地北楼',
            checked: true
        },
        {
            id: 2,
            name: '小小酥',
            telephone: '13866668888',
            address: '浙江省杭州市西湖区骆家庄西苑一区99号',
            checked: false
        }
    ]
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_MY_PROFILE_SUCCESS:
        return { ...state, profile: action.profile }
    case CHANGE_MY_DEFAULT_ADDRESS_SUCCESS:
        return { ...state, address: action.address }
    case DELETE_MY_ADDRESS_SUCCESS:
        return { ...state, address: action.address}
    default:
        return state
    }
}

const ui = createAsyncUIReducer({
    fetchProfileUI: FETCH_MY_PROFILE
})

export default combineReducers({
    data,
    ui
})
