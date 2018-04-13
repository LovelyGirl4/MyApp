import { combineReducers } from 'redux'
import { FETCH_MY_PROFILE, FETCH_MY_PROFILE_SUCCESS } from '../constants/ActionTypes'
import { createAsyncUIReducer } from '../common/index'

const initialState = {
    profile: {}
}

const data = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_MY_PROFILE_SUCCESS:
        return { ...state, profile: action.profile }
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
