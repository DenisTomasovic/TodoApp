import { ADD_TASKS_RESPONSE, DELETE_TASKS_RESPONSE, GET_TASKS_RESPONSE, PUT_TASKS_RESPONSE } from './actions'

const initState: PayloadProps<TaskType[]> = {
    data: []
}

export const taskReducer = (state = initState, action: ActionProps<TaskType[] | TaskType>) => {
    switch (action.type) {
        case GET_TASKS_RESPONSE:
            return {
                ...state,
                data: action.payload
            }
        case ADD_TASKS_RESPONSE:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_TASKS_RESPONSE: {
            const task = action.payload as TaskType
            const array = state.data.filter((item) => item.id !== task.id)

            return {
                ...state,
                data: [...array]
            }
        }
        case PUT_TASKS_RESPONSE: {
            const task = action.payload as TaskType
            const array = state.data.map((item) =>
                item.id === task.id ? ({ ...item, finished: task.finished }) : item)

            return {
                ...state,
                data: [...array]
            }
        }
        default:
            return state
    }
}
