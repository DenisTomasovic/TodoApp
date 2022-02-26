import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ScreenLayout from '../components/ScreenLayout'
import ClassicInput from '../components/input/ClassicInput'
import FooterButton from '../components/button/FooterButton'
import { Datepicker } from '@ui-kitten/components'
import { useDispatch } from 'react-redux'
import { RootStackScreenProps } from '../types/Navigation'
import { addTasksRequest } from '../redux/tasks/actions'
import { useForm } from 'react-hook-form'
import { TaskAddRequest } from '../services/TaskService'
import { Controller } from 'react-hook-form'
import { taskDescriptionRules, taskTitleRules } from '../constants/Rules'

const AddTaskScreen = ({ navigation, route }: RootStackScreenProps<'AddTask'>) => {
    const { categoryId } = route.params

    const dispatch = useDispatch()

    const [date, setDate] = useState<Date>(new Date)

    const { control, handleSubmit, formState: { errors } } = useForm<TaskAddRequest>({
        defaultValues: {
            title: '',
            description: ''
        }
    })

    // Make request - add a new task to category
    const onSave = (value: TaskAddRequest): void => {
        dispatch(addTasksRequest({
            title: value.title,
            description: value.description,
            date: date.toString(),
            category_id: categoryId
        }))
        navigation.goBack()
    }

    return (
        <ScreenLayout style={styles.layout}>
            <View style={styles.wrapper}>
                <Controller
                    name='title'
                    rules={taskTitleRules}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <ClassicInput
                            title='Názov úlohy'
                            value={value}
                            onChange={(text) => onChange(text)}
                            caption={errors?.title?.message}
                        />
                    )}
                />
                <Controller
                    name='description'
                    control={control}
                    rules={taskDescriptionRules}
                    render={({ field: { onChange, value } }) => (
                        <ClassicInput
                            title='Stručný popis úlohy'
                            value={value}
                            onChange={(text) => onChange(text)}
                            caption={errors?.description?.message}
                        />
                    )}
                />
                <Datepicker
                    min={new Date}
                    date={date}
                    onSelect={(next) => setDate(next)}
                    style={styles.date}
                />
            </View>
            <FooterButton
                title='Uložiť do zoznamu'
                onPress={handleSubmit(onSave)}
            />
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    layout: {
        paddingTop: 15
    },
    wrapper: {
        paddingHorizontal: 15
    },
    date: {
        marginBottom: 15
    }
})

export default AddTaskScreen
