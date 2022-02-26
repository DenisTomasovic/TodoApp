import { call, put, takeEvery } from 'redux-saga/effects'
import CategoryService, { CategoryAddRequest, CategoryDeleteRequest } from '../../services/CategoryService'
import {
    ADD_CATEGORIES_REQUEST,
    addCategoriesResponse,
    DELETE_CATEGORIES_REQUEST,
    deleteCategoriesResponse,
    GET_CATEGORIES_REQUEST,
    getCategoriesResponse
} from './actions'
import { getLoadingRequest, getErrorRequest } from '../global/actions'

/**
 * Getting all categories
 */
function* getCategories() {
    yield put(getLoadingRequest(true))

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = yield call(CategoryService.getCategories)
        yield put(getLoadingRequest(false))
        yield put(getCategoriesResponse(response.data))
    } catch (e: unknown) {
        const error = e as ErrorType
        yield put(getLoadingRequest(false))
        yield put(getErrorRequest(error.message))
    }
}

export function* getCategorySaga() {
    yield takeEvery(GET_CATEGORIES_REQUEST, getCategories)
}

/**
 * Method adds a new category to list
 */
function* addCategories(action: ActionProps<CategoryAddRequest>) {
    yield put(getLoadingRequest(true))

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = yield call(CategoryService.addCategories, action.payload)
        yield put(getLoadingRequest(false))
        yield put(addCategoriesResponse(response.data))
    } catch (e: unknown) {
        const error = e as ErrorType
        yield put(getLoadingRequest(false))
        yield put(getErrorRequest(error.message))
    }
}

export function* addCategorySaga() {
    yield takeEvery(ADD_CATEGORIES_REQUEST, addCategories)
}

/**
 * Method removes a category from list
 */
function* deleteCategories(action: ActionProps<CategoryDeleteRequest>) {
    yield put(getLoadingRequest(true))

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = yield call(CategoryService.deleteCategories, action.payload)
        yield put(getLoadingRequest(false))
        yield put(deleteCategoriesResponse(response.data))
    } catch (e: unknown) {
        const error = e as ErrorType
        yield put(getLoadingRequest(false))
        yield put(getErrorRequest(error.message))
    }
}

export function* deleteCategorySaga() {
    yield takeEvery(DELETE_CATEGORIES_REQUEST, deleteCategories)
}
