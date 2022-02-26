import { call, put, takeEvery } from 'redux-saga/effects'
import TaskService, { TaskAddRequest, TaskDeleteRequest, TaskPutRequest } from '../../services/TaskService'
import {
    ADD_TASKS_REQUEST,
    addTasksResponse,
    DELETE_TASKS_REQUEST,
    deleteTaskResponse,
    GET_TASKS_REQUEST,
    getTasksResponse, PUT_TASKS_REQUEST, putTasksResponse
} from './actions'
import { getErrorRequest, getLoadingRequest } from '../global/actions'

/**
 * Get all tasks
 */
function* getTasks(action: ActionProps<TaskType[]>) {
    yield put(getLoadingRequest(true))

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = yield call(TaskService.getTasks, action.payload)
        yield put(getLoadingRequest(false))
        yield put(getTasksResponse(response.data))
    } catch (e: unknown) {
        const error = e as ErrorType
        yield put(getLoadingRequest(false))
        yield put(getErrorRequest(error.message))
    }
}

export function* getTaskSaga() {
    yield takeEvery(GET_TASKS_REQUEST, getTasks)
}

/**
 * Add a new task to category
 */
function* addTasks(action: ActionProps<TaskAddRequest>) {
    yield put(getLoadingRequest(true))

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = yield call(TaskService.addTasks, action.payload)
        yield put(getLoadingRequest(false))
        yield put(addTasksResponse(response.data))
    } catch (e: unknown) {
        const error = e as ErrorType
        yield put(getLoadingRequest(false))
        yield put(getErrorRequest(error.message))
    }
}

export function* addTaskSaga() {
    yield takeEvery(ADD_TASKS_REQUEST, addTasks)
}

/**
 * Update state of task in category
 */
export function* putTasks(action: ActionProps<TaskPutRequest>) {
    yield put(getLoadingRequest(true))

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = yield call(TaskService.putTasks, action.payload)
        yield put(getLoadingRequest(false))
        yield put(putTasksResponse(response.data))
    } catch (e: unknown) {
        const error = e as ErrorType
        yield put(getLoadingRequest(false))
        yield put(getErrorRequest(error.message))
    }
}

export function* putTaskSaga() {
    yield takeEvery(PUT_TASKS_REQUEST, putTasks)
}

/**
 * Delete selected task from category
 */
function* deleteTasks(action: ActionProps<TaskDeleteRequest>) {
    yield put(getLoadingRequest(true))

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = yield call(TaskService.deleteTasks, action.payload)
        yield put(getLoadingRequest(false))
        yield put(deleteTaskResponse(response.data))
    } catch (e: unknown) {
        const error = e as ErrorType
        yield put(getLoadingRequest(false))
        yield put(getErrorRequest(error.message))
    }
}

export function* deleteTaskSaga() {
    yield takeEvery(DELETE_TASKS_REQUEST, deleteTasks)
}
