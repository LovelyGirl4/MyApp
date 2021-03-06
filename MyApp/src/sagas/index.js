import { fork, take } from 'redux-saga/effects'
import loginSagas from './loginSagas'
import ticketSagas from './ticketSagas'
import productSagas from './productSagas'
import cartSagas from './cartSagas'
import mySagas from './mySagas'
import orderSagas from './orderSagas'

function createSagas(...args) {
    const sagas = []
    args.forEach(el => {
        for (let func of Object.values(el)) {
            sagas.push(fork(func))
        }
    })
    return sagas
}
export default function* root() {
    yield createSagas(loginSagas, ticketSagas, productSagas, cartSagas, mySagas, orderSagas)
}