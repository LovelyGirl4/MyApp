import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import reducer from './reducers'
import sagas from './sagas'

const configureStore = preloadedState => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        reducer,
        preloadedState,
        compose(
            applyMiddleware(sagaMiddleware, logger)
        )
    )
    sagaMiddleware.run(sagas)
    store.close = () => store.dispatch(END)

    return store
}

const store = configureStore()

export default store
