import { FETCH_MY_PROFILE_SUCCESS } from '../constants/ActionTypes'

const initialState = {
    profile: {}
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_MY_PROFILE_SUCCESS:
        return { ...state, profile: action.profile }
    default:
        return state
    }
}

export default myReducer
