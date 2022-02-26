type TaskSelector = {
    taskReducer: PayloadProps<TaskType[]>
}

export const taskSelector = (state: TaskSelector): TaskType[] => {
    return state.taskReducer.data
}
