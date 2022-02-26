import { fork } from 'redux-saga/effects'
import { addCategorySaga, deleteCategorySaga, getCategorySaga } from './categories/sagas'
import { addTaskSaga, deleteTaskSaga, getTaskSaga, putTaskSaga } from './tasks/sagas'

export function* rootSaga() {
    yield fork(getCategorySaga)
    yield fork(addCategorySaga)
    yield fork(deleteCategorySaga)
    yield fork(getTaskSaga)
    yield fork(addTaskSaga)
    yield fork(deleteTaskSaga)
    yield fork(putTaskSaga)
}
