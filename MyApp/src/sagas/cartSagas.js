import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'
import store from '../store'

// 调接口获取购物车列表
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
// 是否选中
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
// 是否全选
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
// 改变数量
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
// 是否编辑
function* updateCartEditFunc(state) {
    try {
        yield put({ type: ActionTypes.UPDATE_CART_EDIT_SUCCESS, state })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.UPDATE_CART_EDIT_ERROR })
    }
}
// 删除购物车中的商品
function* deleteCartProductsFunc(id) {
    try {
        const data = store.getState().cart.data.cartProducts
        let products
        // 如果有id,就是单个删除，没有则为批量删除
        if (id) {
            products = data.filter(d => d.id !== id)
        } else {
            products = data.filter(d => d.checked === false)
        }
        yield put({ type: ActionTypes.DELETE_CART_PRODUCTS_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.DELETE_CART_PRODUCTS_ERROR })
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
    },
    watchUpdateCartEdit: function* () {
        while (true) {
            const { state } = yield take(ActionTypes.UPDATE_CART_EDIT)
            yield call(updateCartEditFunc, state)
        }
    },
    watchDeleteCartProducts: function* () {
        while (true) {
            const {id} = yield take(ActionTypes.DELETE_CART_PRODUCTS)
            yield call(deleteCartProductsFunc, id)
        }
    }
}
