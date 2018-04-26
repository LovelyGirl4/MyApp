import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'
import store from '../store'


function* addProductOrderFunc(product) {
    try {
        let products = []
        if (product) {
            products.push(product)
        } else {
            const { cartProducts } = store.getState().cart.data
            products = cartProducts.filter(c => c.checked === true)
        }
        yield put({ type: ActionTypes.ADD_PRODUCT_ORDER_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.ADD_PRODUCT_ORDER_ERROR })
    }
}

function* addTicketOrderFunc(place) {
    try {
        yield put({ type: ActionTypes.ADD_TICKET_ORDER_SUCCESS, place })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.ADD_TICKET_ORDER_ERROR })
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
            const {product} = yield take(ActionTypes.ADD_PRODUCT_ORDER)
            yield call(addProductOrderFunc, product)
        }
    },
    watchAddTicketOrder: function* () {
        while (true) {
            const { place } = yield take(ActionTypes.ADD_TICKET_ORDER)
            yield call(addTicketOrderFunc, place)
        }
    },
    watchUpdateProductOrderAddress: function* () {
        while (true) {
            const {address} = yield take(ActionTypes.UPDATE_PRODUCT_ORDER_ADDRESS)
            yield call(updateProductOrderAddressFunc, address)
        }
    },
}
