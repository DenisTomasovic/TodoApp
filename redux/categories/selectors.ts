type CategorySelector = {
    categoryReducer: PayloadProps<CategoryType[]>
}

export const categorySelector = (state: CategorySelector): CategoryType[] => {
    return state.categoryReducer.data
}
