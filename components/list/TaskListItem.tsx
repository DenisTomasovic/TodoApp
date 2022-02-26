import { StyleSheet, TextStyle } from 'react-native'
import { ListItem, Text } from '@ui-kitten/components'
import Colors from '../../constants/Colors'
import PressableIcon from '../icon/PressableIcon'
import { useDispatch } from 'react-redux'
import { deleteTaskRequest, putTasksRequest } from '../../redux/tasks/actions'
import moment from 'moment'

type ItemProps = RenderItem<TaskType> & {
    finished?: boolean
}

const TaskListItem = ({ item, finished }: ItemProps) => {

    const dispatch = useDispatch()

    const dateFormat = (): string => {
        const date = moment(item.date, 'LLLL')
        return moment(date).format('MMM D, YYYY')
    }

    const lineThroughText = (): TextStyle | null => {
        if (finished) {
            return {
                textDecorationLine: 'line-through'
            }
        }
        return null
    }

    const renderHeader = () => {
        return (
            <>
                <Text style={[styles.title, lineThroughText()]}>
                    {item.title}
                </Text>
                <Text style={[styles.date, lineThroughText()]}>
                    {dateFormat()}
                </Text>
            </>
        )
    }

    const renderDescription = (): JSX.Element => {
        return (
            <Text style={[styles.description, lineThroughText()]}>
                {item.description}
            </Text>
        )
    }

    const renderFinish = (): JSX.Element => {
        return PressableIcon({
            name: 'checkmark-outline',
            size: 22,
            color: Colors.tint,
            onPress: () => dispatch(putTasksRequest({
                id: item.id,
                category_id: item.category_id,
                finished: true
            }))
        })
    }

    const renderDelete = (): JSX.Element => {
        return PressableIcon({
            name: 'trash-outline',
            size: 22,
            color: Colors.card.icon,
            onPress: () => dispatch(deleteTaskRequest({
                category_id: item.category_id,
                id: item.id
            }))
        })
    }

    return (
        <ListItem
            title={renderHeader}
            description={renderDescription}
            accessoryLeft={finished ? undefined : renderFinish()}
            accessoryRight={renderDelete()}
            style={[styles.item, finished && { paddingLeft: 20 }]}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.backgroundTint,
        marginBottom: 15,
        elevation: 1
    },
    title: {
        color: Colors.card.title,
        fontSize: 17
    },
    date: {
        color: Colors.card.date,
        fontSize: 14,
        marginBottom: 4
    },
    description: {
        color: Colors.card.desc
    }
})

export default TaskListItem
