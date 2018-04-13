import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'

function* fetchCartProductsFunc() {
    try {
        const cartProducts = yield call(api.fetchCartProducts)
        const products = cartProducts.products.map(c => {
            const count = cartProducts.inquiries.filter(i => Number(c.id) === Number(i.product_id))
            return {
                ...c,
                count: count.length
            }
        })
        yield put({ type: ActionTypes.FETCH_CART_PRODUCTS_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.FETCH_CART_PRODUCTS_ERROR })
    }
}

export default {
    watchFetchCartProducts: function* () {
        while (true) {
            yield take(ActionTypes.FETCH_CART_PRODUCTS)
            yield call(fetchCartProductsFunc)
        }
    },
}
