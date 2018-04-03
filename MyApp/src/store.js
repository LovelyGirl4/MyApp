import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import reducer from './reducers'

const configureStore = preloadedState => {
    return createStore(
        reducer,
        preloadedState,
        compose(
            applyMiddleware(logger)
        )
    )
}

const store = configureStore()

export default store
