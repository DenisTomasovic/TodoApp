import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga'
import { reducers } from './reducers'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
