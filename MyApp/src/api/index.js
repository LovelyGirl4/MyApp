import fetch from 'isomorphic-fetch'

let API_DOMAIN = 'http://api.test.autopartshub.com'
let API_CLIENT_ID = 'd2ViOnNlY3JldA=='

// encodeURIComponent()函数作用：可把字符串作为URI 组件进行编码。其返回值URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。
const serialize = obj => Object.keys(obj).map(key => key + '=' + encodeURIComponent(obj[key])).join('&')
const _fetch = (url, option) => {
    return fetch(API + url, option).then(res => {
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
    const access_token = store().getState().app.token
    // const access_token = window.localStorage.getItem('token')
    return _fetch(url, {
        ...option,
        headers: {
            ...option.headers,
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    }).then()
}

// 登录获得token
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