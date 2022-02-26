import { API } from '../api/api'
import { SERVER_URL } from '../api/config'
import { TASKS } from '../api/endpoints.json'
import { AxiosResponse } from 'axios'

export type TaskAddRequest = Omit<TaskType, 'id' | 'finished'>

export type TaskPutRequest = Pick<TaskType, 'id' | 'finished' | 'category_id'>

export type TaskDeleteRequest = Pick<TaskType, 'id' | 'category_id'>

class TaskService {

    // Get all tasks by category id
    getTasks = async (categoryId: string): Promise<AxiosResponse<TaskType[]>> => {
        return await API.get(`${SERVER_URL}${TASKS.GET_BY_ID}`.replace('{id}', categoryId))
    }

    // Add a new task to category
    addTasks = async (request: TaskAddRequest): Promise<AxiosResponse<TaskType>> => {
        return await API.post(`${SERVER_URL}${TASKS.GET_BY_ID}`.replace('{id}', request.category_id), request)
    }

    // Update state of task
    putTasks = async (request: TaskPutRequest): Promise<AxiosResponse<TaskType>> => {
        return await API.put(`${SERVER_URL}${TASKS.BY_ID}`
            .replace('{category_id}', request.category_id).replace('{task_id}', request.id), request)
    }

    // Remove task from category by id
    deleteTasks = async (request: TaskDeleteRequest): Promise<AxiosResponse<TaskType>> => {
        return await API.delete(`${SERVER_URL}${TASKS.BY_ID}`
            .replace('{category_id}', request.category_id).replace('{task_id}', request.id))
    }
}

export default new TaskService()
