import ScreenLayout from '../components/ScreenLayout'
import HeaderView from '../components/header/HeaderView'
import FooterButton from '../components/button/FooterButton'
import { RootStackScreenProps } from '../types/Navigation'
import SearchableView from '../components/header/SearchableView'
import { useDispatch, useSelector } from 'react-redux'
import { taskSelector } from '../redux/tasks/selectors'
import { useEffect } from 'react'
import { getTasksRequest, getTasksResponse } from '../redux/tasks/actions'
import TaskList from '../components/list/TaskList'

const ProgressListScreen = ({ navigation, route }: RootStackScreenProps<'Task'>) => {
    const { categoryId, name } = route.params

    const dispatch = useDispatch()
    const tasks = useSelector(taskSelector)

    useEffect(() => {
        dispatch(getTasksRequest(categoryId))
        return () => {
            dispatch(getTasksResponse([]))
        }
    }, [])

    return (
        <ScreenLayout>
            <SearchableView onPress={() => navigation.navigate('Search')}/>
            <HeaderView
                title={name}
                onPress={() => navigation.goBack()}
            />
            <TaskList
                items={tasks}
                style={{ marginBottom: 65 }}
            />
            <FooterButton
                title='Pridať novú úlohu'
                onPress={() => navigation.navigate('AddTask', { categoryId })}
            />
        </ScreenLayout>
    )
}

export default ProgressListScreen
