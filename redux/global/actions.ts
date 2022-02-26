export const GET_ERROR_REQUEST = 'GET_ERROR_REQUEST'

export const GET_LOADING_REQUEST = 'GET_LOADING_REQUEST'

/**
 * Showing global error with message
 * @param error
 */
export const getErrorRequest = (error: string): ActionProps<string> => {
    return {
        type: GET_ERROR_REQUEST,
        payload: error
    }
}

/**
 * Showing global loading while fetching data
 * depending on value of state
 * @param state
 */
export const getLoadingRequest = (state: boolean): ActionProps<boolean> => {
    return {
        type: GET_LOADING_REQUEST,
        payload: state
    }
}
