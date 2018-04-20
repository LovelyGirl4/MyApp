import { FETCH_MY_PROFILE, UPDATE_MY_DEFAULT_ADDRESS, DELETE_MY_ADDRESS, UPDATE_MY_ADDRESS,
    ADD_MY_ADDRESS} from '../constants/ActionTypes'

export const fetchMyProfile = () => ({
    type: FETCH_MY_PROFILE
})

export const updateMyDefaultAddress = (id) => ({
    type: UPDATE_MY_DEFAULT_ADDRESS,
    id
})

export const updateMyAddress = (address) => ({
    type: UPDATE_MY_ADDRESS,
    address
})

export const deleteMyAddress = (id) => ({
    type: DELETE_MY_ADDRESS,
    id
})

export const addMyAddress = (address) => ({
    type: ADD_MY_ADDRESS,
    address
})