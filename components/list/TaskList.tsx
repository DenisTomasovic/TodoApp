import { StyleSheet, ScrollView, ViewStyle } from 'react-native'
import TaskListItem from './TaskListItem'

type TaskProps = {
    items: TaskType[]
    style?: ViewStyle
}

export const TaskList = ({ items, style }: TaskProps) => {

    return (
        <ScrollView
            style={style}
            contentContainerStyle={styles.container}
        >
            {
                items?.map((item) => !item.finished && (
                    <TaskListItem key={item.id} item={item} />
                    )
                )
            }
            {
                items?.map((item) => item.finished && (
                    <TaskListItem key={item.id} item={item} finished/>
                    )
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    title: {
        paddingBottom: 15,
        fontSize: 18
    }
})

export default TaskList
