import store from '../store'

let API_DOMAIN = 'http://api.test.autopartshub.com'
let API_CLIENT_ID = 'd2ViOnNlY3JldA=='

// encodeURIComponent()函数作用：可把字符串作为URI 组件进行编码。其返回值URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。
const serialize = obj => Object.keys(obj).map(key => key + '=' + encodeURIComponent(obj[key])).join('&')
const _fetch = (url, option) => {
    return fetch(API_DOMAIN + url, option).then(res => {
        if (res.status > 199 && res.status < 300) {
            return res.json()
        } else {
            throw res
        }
    })
}
const _fetchJson = (url, option = {}) => {
    return _fetch(url, {
        headers: {
            ...option.headers,
            'Content-Type': 'application/json'
        }
    })
}
const _authedFetch = (url, option = {}) => {
    // token: 1.从store里取 2.从缓存里取
    const access_token = store.getState().login.accessToken
    return _fetch(url, {
        ...option,
        headers: {
            ...option.headers,
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    }).then()
}

// 登录获得token TODO
export const doLogin = (username, password) => {
    return _fetch('/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: serialize({
            username,
            password,
            grant_type: 'password',
            client_id: 'app',
            client_secret: '',
            scope: ''
        })
    })
}
export const fetchTickets = (pagination = { current_page: 1 }) => {
    return _authedFetch(`/api/products?page=${pagination.current_page}`)
}
export const fetchCartProducts = () => {
    const userID = store.getState().login.userID
    return _authedFetch(`/api/users/${userID}/inquiries?type=draft&page=1&page_size=9999&&order_by=updated_at|desc`)
}

export const addProductToCart = (id) => {
    const userID = store.getState().login.userID
    return _authedFetch(`/api/users/${userID}/inquiries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            product_id: id,
            quantity: 1,
            unit: 'PCS',
        })
    })
}

export const fetchMyProfile = () => {
    const userID = store.getState().login.userID
    return _authedFetch('/api/users/' + userID)
}