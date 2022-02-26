type CategoryBase = {
    id: string,
    title: string
}

type CategoryType = CategoryBase & {
    tasks: TaskType[]
}
