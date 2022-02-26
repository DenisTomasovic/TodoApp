import { CategoryAddRequest, CategoryDeleteRequest } from '../../services/CategoryService'

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_RESPONSE = 'GET_CATEGORIES_RESPONSE'

export const ADD_CATEGORIES_REQUEST = 'ADD_CATEGORIES_REQUEST'
export const ADD_CATEGORIES_RESPONSE = 'ADD_CATEGORIES_RESPONSE'

export const DELETE_CATEGORIES_REQUEST = 'DELETE_CATEGORIES_REQUEST'
export const DELETE_CATEGORIES_RESPONSE = 'DELETE_CATEGORIES_RESPONSE'

/**
 * Getting all categories
 */
export const getCategoriesRequest = () => {
    return {
        type: GET_CATEGORIES_REQUEST
    }
}

export const getCategoriesResponse = (data: CategoryType[]): ActionProps<CategoryType[]> => {
    return {
        type: GET_CATEGORIES_RESPONSE,
        payload: data
    }
}

/**
 * Adding a new category to list by id
 * @param data
 */
export const addCategoriesRequest = (data: CategoryAddRequest): ActionProps<CategoryAddRequest> => {
    return {
        type: ADD_CATEGORIES_REQUEST,
        payload: data
    }
}

export const addCategoriesResponse = (data: CategoryType): ActionProps<CategoryType> => {
    return {
        type: ADD_CATEGORIES_RESPONSE,
        payload: data
    }
}

/**
 * Deleting category from list by id
 * @param data
 */
export const deleteCategoriesRequest = (data: CategoryDeleteRequest): ActionProps<CategoryDeleteRequest> => {
    return {
        type: DELETE_CATEGORIES_REQUEST,
        payload: data
    }
}

export const deleteCategoriesResponse = (data: CategoryType): ActionProps<CategoryType> => {
    return {
        type: DELETE_CATEGORIES_RESPONSE,
        payload: data
    }
}
