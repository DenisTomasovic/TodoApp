import { ADD_CATEGORIES_RESPONSE, DELETE_CATEGORIES_RESPONSE, GET_CATEGORIES_RESPONSE } from './actions'

const initState: PayloadProps<CategoryType[]> = {
    data: []
}

export const categoryReducer = (state = initState, action: ActionProps<CategoryType[] | CategoryType>) => {
    switch (action.type) {
        case GET_CATEGORIES_RESPONSE:
            return {
                ...state,
                data: action.payload
            }
        case ADD_CATEGORIES_RESPONSE:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_CATEGORIES_RESPONSE: {
            const category = action.payload as CategoryType
            const array = state.data.filter((item) => item.id !== category.id)

            return {
                ...state,
                data: [...array]
            }
        }
        default:
            return state
    }
}
