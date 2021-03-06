import { put, take, fork, call, select } from 'redux-saga/effects'
import { Toast } from 'antd-mobile'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'

function* fetchProductsFunc(pagination) {
    try {
        Toast.loading('加载中', 30)
        const products = yield call(api.fetchTickets, pagination)
        yield put({ type: ActionTypes.FETCH_PRODUCTS_SUCCESS, products })
        Toast.hide()
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.FETCH_PRODUCTS_ERROR })
        Toast.hide()
    }
}

function* addProductToCartFunc(id) {
    try {
        yield call(api.addProductToCart, id)
        yield put({ type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS})
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.ADD_PRODUCT_TO_CART_ERROR })
    }
}

export default {
    watchFetchProducts: function* () {
        while (true) {
            const { pagination } = yield take(ActionTypes.FETCH_PRODUCTS)
            yield call(fetchProductsFunc, pagination)
        }
    },
    watchAddProductToCart: function* () {
        while (true) {
            const { id } = yield take(ActionTypes.ADD_PRODUCT_TO_CART)
            yield call(addProductToCartFunc, id)
        }
    }
}
