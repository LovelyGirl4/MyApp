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