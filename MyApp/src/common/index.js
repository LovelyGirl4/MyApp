const base_url = 'http://gw-s3-dev.s3.amazonaws.com/'
export const baseURL = (url) => {
    let temp
    if (url) {
        if (url.indexOf('base64') >= 0 || url.indexOf('http') >= 0) {
            temp = url
        } else {
            temp = base_url + url
        }
    }
    return temp
}

export const createAsyncUIReducer = items => {
    const defaultState = {}
    for (let state in items) {
        if (items.hasOwnProperty(state)) {
            defaultState[state] = false
        }
    }
    return (state = defaultState, action) => {
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                switch (action.type) {
                case items[key]:
                    return { ...state, [key]: true }
                case items[key] + '_SUCCESS':
                    return { ...state, [key]: false }
                case items[key] + '_ERROR':
                    return { ...state, [key]: false }
                default:
                    break
                }
            }
        }
        return { ...state }
    }
}