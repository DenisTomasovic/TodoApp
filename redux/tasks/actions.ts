import { TaskAddRequest, TaskDeleteRequest, TaskPutRequest } from '../../services/TaskService'

export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST'
export const GET_TASKS_RESPONSE = 'GET_TASKS_RESPONSE'

export const ADD_TASKS_REQUEST = 'ADD_TASKS_REQUEST'
export const ADD_TASKS_RESPONSE = 'ADD_TASKS_RESPONSE'

export const DELETE_TASKS_REQUEST = 'DELETE_TASKS_REQUEST'
export const DELETE_TASKS_RESPONSE = 'DELETE_TASKS_RESPONSE'

export const PUT_TASKS_REQUEST = 'PUT_TASKS_REQUEST'
export const PUT_TASKS_RESPONSE = 'PUT_TASKS_RESPONSE'

/**
 * Getting all tasks by id
 * @param categoryId
 */
export const getTasksRequest = (categoryId: string): ActionProps<string> => {
    return {
        type: GET_TASKS_REQUEST,
        payload: categoryId
    }
}

export const getTasksResponse = (data: TaskType[]): ActionProps<TaskType[]> => {
    return {
        type: GET_TASKS_RESPONSE,
        payload: data
    }
}

/**
 * Adding a new task to category by id
 * @param data
 */
export const addTasksRequest = (data: TaskAddRequest): ActionProps<TaskAddRequest> => {
    return {
        type: ADD_TASKS_REQUEST,
        payload: data
    }
}

export const addTasksResponse = (data: TaskType): ActionProps<TaskType> => {
    return {
        type: ADD_TASKS_RESPONSE,
        payload: data
    }
}

/**
 * Updating selected task (move task to finished)
 */
export const putTasksRequest = (data: TaskPutRequest): ActionProps<TaskPutRequest> => {
    return {
        type: PUT_TASKS_REQUEST,
        payload: data
    }
}

export const putTasksResponse = (data: TaskType): ActionProps<TaskType> => {
    return {
        type: PUT_TASKS_RESPONSE,
        payload: data
    }
}

/**
 * Removing selected task from category by id
 */
export const deleteTaskRequest = (data: TaskDeleteRequest): ActionProps<TaskDeleteRequest> => {
    return {
        type: DELETE_TASKS_REQUEST,
        payload: data
    }
}

export const deleteTaskResponse = (data: TaskType): ActionProps<TaskType> => {
    return {
        type: DELETE_TASKS_RESPONSE,
        payload: data
    }
}
