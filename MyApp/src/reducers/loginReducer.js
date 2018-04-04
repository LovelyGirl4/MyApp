import { DOLOGIN_SUCCESS } from '../constants/ActionTypes'

const initialState = {}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case DOLOGIN_SUCCESS:
        return { ...state }
    default:
        return state
    }
}

export default loginReducer
