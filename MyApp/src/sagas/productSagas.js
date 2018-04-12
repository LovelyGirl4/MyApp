import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'

function* fetchProductsFunc(pagination) {
    try {
        const products = yield call(api.fetchTickets, pagination)
        yield put({ type: ActionTypes.FETCH_PRODUCTS_SUCCESS, products })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.FETCH_PRODUCTS_ERROR })
    }
}

export default {
    watchFetchProducts: function* () {
        while (true) {
            const { pagination } = yield take(ActionTypes.FETCH_PRODUCTS)
            const token = yield call(fetchProductsFunc, pagination)
        }
    },
}
