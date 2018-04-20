import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'
import store from '../store'


function* fetchCartProductsFunc() {
    try {
        const cartProducts = yield call(api.fetchCartProducts)
        const products = cartProducts.products.map(c => {
            const count = cartProducts.inquiries.filter(i => Number(c.id) === Number(i.product_id))
            return {
                ...c,
                count: count.length,
                checked: false
            }
        })
        yield put({ type: ActionTypes.FETCH_CART_PRODUCTS_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.FETCH_CART_PRODUCTS_ERROR })
    }
}

function* updateCartProductCheckedFunc(id, checked) {
    try {
        const data = store.getState().cart.data.cartProducts
        const products = data.map(d => {
            if (d.id === id) {
                return {...d, checked: checked}
            } else {
                return {...d}
            }
        })
        yield put({ type: ActionTypes.UPDATE_CART_PRODUCT_CHECKED_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.UPDATE_CART_PRODUCT_CHECKED_ERROR })
    }
}

function* updateCartAllProductsCheckedFunc(checked) {
    try {
        const data = store.getState().cart.data.cartProducts
        const products = data.map(d => {
            return {...d, checked: checked}
        })
        yield put({ type: ActionTypes.UPDATE_CART_ALL_PRODUCTS_CHECKED_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.UPDATE_CART_ALL_PRODUCTS_CHECKED_ERROR })
    }
}

function* updateCartProductNumberFunc(id, number) {
    try {
        const data = store.getState().cart.data.cartProducts
        const products = data.map(d => {
            if (d.id === id) {
                return { ...d, count: number }
            } else {
                return { ...d }
            }
        })
        yield put({ type: ActionTypes.UPDATE_CART_PRODUCT_NUMBER_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.UPDATE_CART_PRODUCT_NUMBER_ERROR})
    }
}

export default {
    watchFetchCartProducts: function* () {
        while (true) {
            yield take(ActionTypes.FETCH_CART_PRODUCTS)
            yield call(fetchCartProductsFunc)
        }
    },
    watchUpdateCartProductChecked: function* () {
        while (true) {
            const { id, checked } = yield take(ActionTypes.UPDATE_CART_PRODUCT_CHECKED)
            yield call(updateCartProductCheckedFunc, id, checked)
        }
    },
    watchUpdateCartAllProductsChecked: function* () {
        while (true) {
            const { checked } = yield take(ActionTypes.UPDATE_CART_ALL_PRODUCTS_CHECKED)
            yield call(updateCartAllProductsCheckedFunc, checked)
        }
    },
    watchUpdateCartProductNumber: function* () {
        while (true) {
            const { id, number } = yield take(ActionTypes.UPDATE_CART_PRODUCT_NUMBER)
            yield call(updateCartProductNumberFunc, id, number)
        }
    }
}
