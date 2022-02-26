import { GET_LOADING_REQUEST, GET_ERROR_REQUEST } from './actions'

const initError: PayloadProps<string> = {
    data: ''
}

const initLoading: PayloadProps<boolean> = {
    data: false
}

export const errorRequestReducer = (state = initError, action: ActionProps<string>) => {
    switch (action.type) {
        case GET_ERROR_REQUEST:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export const loadingRequestReducer = (state = initLoading, action: ActionProps<boolean>) => {
    switch (action.type) {
        case GET_LOADING_REQUEST:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
