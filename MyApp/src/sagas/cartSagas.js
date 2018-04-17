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

function* changeCartProductCheckedFunc(id, checked) {
    try {
        const data = store.getState().cart.data.cartProducts
        const products = data.map(d => {
            if (d.id === id) {
                return {...d, checked: checked}
            } else {
                return {...d}
            }
        })
        yield put({ type: ActionTypes.CHANGE_CART_PRODUCT_CHECKED_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.CHANGE_CART_PRODUCT_CHECKED_ERROR })
    }
}

function* changeCartAllProductsCheckedFunc(checked) {
    try {
        const data = store.getState().cart.data.cartProducts
        const products = data.map(d => {
            return {...d, checked: checked}
        })
        yield put({ type: ActionTypes.CHANGE_CART_ALL_PRODUCTS_CHECKED_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.CHANGE_CART_ALL_PRODUCTS_CHECKED_ERROR })
    }
}

function* changeCartProductNumberFunc(id, number) {
    try {
        const data = store.getState().cart.data.cartProducts
        const products = data.map(d => {
            if (d.id === id) {
                return { ...d, count: number }
            } else {
                return { ...d }
            }
        })
        yield put({ type: ActionTypes.CHANGE_CART_PRODUCT_NUMBER_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.CHANGE_CART_PRODUCT_NUMBER_ERROR})
    }
}

export default {
    watchFetchCartProducts: function* () {
        while (true) {
            yield take(ActionTypes.FETCH_CART_PRODUCTS)
            yield call(fetchCartProductsFunc)
        }
    },
    watchChangeCartProductChecked: function* () {
        while (true) {
            const { id, checked } = yield take(ActionTypes.CHANGE_CART_PRODUCT_CHECKED)
            yield call(changeCartProductCheckedFunc, id, checked)
        }
    },
    watchChangeCartAllProductsChecked: function* () {
        while (true) {
            const { checked } = yield take(ActionTypes.CHANGE_CART_ALL_PRODUCTS_CHECKED)
            yield call(changeCartAllProductsCheckedFunc, checked)
        }
    },
    watchChangeCartProductNumber: function* () {
        while (true) {
            const { id, number } = yield take(ActionTypes.CHANGE_CART_PRODUCT_NUMBER)
            yield call(changeCartProductNumberFunc, id, number)
        }
    }
}
