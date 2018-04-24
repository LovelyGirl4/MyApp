import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'
import store from '../store'


function* addProductOrderFunc(order) {
    try {
        const { cartProducts } = store.getState().cart.data
        const products = cartProducts.filter(c => c.checked === true)
        yield put({ type: ActionTypes.ADD_PRODUCT_ORDER_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.ADD_PRODUCT_ORDER_ERROR })
    }
}

function* updateProductOrderAddressFunc(address) {
    try {
        yield put({ type: ActionTypes.UPDATE_PRODUCT_ORDER_ADDRESS_SUCCESS, address })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.UPDATE_PRODUCT_ORDER_ADDRESS_ERROR })
    }
}

export default {
    watchAddProductOrder: function* () {
        while (true) {
            yield take(ActionTypes.ADD_PRODUCT_ORDER)
            yield call(addProductOrderFunc)
        }
    },
    watchUpdateProductOrderAddress: function* () {
        while (true) {
            const {address} = yield take(ActionTypes.UPDATE_PRODUCT_ORDER_ADDRESS)
            yield call(updateProductOrderAddressFunc, address)
        }
    },
}
