type ErrorSelector = {
    errorRequestReducer: PayloadProps<string>
}

type LoadingSelector = {
    loadingRequestReducer: PayloadProps<boolean>
}

export const errorRequestSelector = (state: ErrorSelector): string => {
    return state.errorRequestReducer.data
}

export const loadingErrorSelector = (state: LoadingSelector): boolean => {
    return state.loadingRequestReducer.data
}
