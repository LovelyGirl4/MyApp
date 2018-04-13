import { put, take, fork, call, select } from 'redux-saga/effects'
import * as ActionTypes from '../constants/ActionTypes'
import * as api from '../api/index'

function* fetchTicketsFunc(pagination) {
    try {
        const tickets = yield call(api.fetchTickets, pagination)
        yield put({ type: ActionTypes.FETCH_TICKETS_SUCCESS, tickets })
    } catch (e) {
        console.log('eeeee:', e)
        yield put({ type: ActionTypes.FETCH_TICKETS_ERROR })
    }
}

export default {
    watchFetchTickets: function* () {
        while (true) {
            const { pagination } = yield take(ActionTypes.FETCH_TICKETS)
            yield call(fetchTicketsFunc, pagination)
        }
    },
}
