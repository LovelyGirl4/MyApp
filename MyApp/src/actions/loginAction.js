import { DO_LOGIN, TOKEN_LOGIN } from '../constants/ActionTypes'

export const doLogin = (username, password) => ({
    type: DO_LOGIN,
    username,
    password,
})

export const tokenLogin = (token) => ({
    type: TOKEN_LOGIN,
    token
})
