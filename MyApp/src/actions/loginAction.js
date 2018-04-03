import { DOLOGIN, TOKEN_LOGIN } from '../constants/ActionTypes'

export const doLogin = (username, password) => ({
    type: DOLOGIN,
    username,
    password,
})
