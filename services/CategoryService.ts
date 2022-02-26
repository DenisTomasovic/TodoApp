import { API } from '../api/api'
import { CATEGORIES } from '../api/endpoints.json'
import { SERVER_URL } from '../api/config'
import { AxiosResponse } from 'axios'

export type CategoryAddRequest = Pick<CategoryType, 'title'>

export type CategoryDeleteRequest = Pick<CategoryType, 'id'>

class CategoryService {

    // Getting all categories
    getCategories = async (): Promise<AxiosResponse<CategoryType[]>> => {
        return await API.get(`${SERVER_URL}${CATEGORIES.GET_ALL}`)
    }

    // Adding new category
    addCategories = async (request: CategoryAddRequest): Promise<AxiosResponse<CategoryBase>> => {
        return await API.post(`${SERVER_URL}${CATEGORIES.GET_ALL}`, request)
    }

    // Remove category by id
    deleteCategories = async (request: CategoryDeleteRequest): Promise<AxiosResponse<CategoryBase>> => {
        return await API.delete(`${SERVER_URL}${CATEGORIES.DELETE_BY_ID}`.replace('{id}', request.id))
    }

}

export default new CategoryService()
