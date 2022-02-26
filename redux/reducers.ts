import { combineReducers } from 'redux'
import { categoryReducer } from './categories/reducers'
import { errorRequestReducer, loadingRequestReducer } from './global/reducers'
import { taskReducer } from './tasks/reducers'

export const reducers = combineReducers({
    categoryReducer,
    errorRequestReducer,
    loadingRequestReducer,
    taskReducer
})
