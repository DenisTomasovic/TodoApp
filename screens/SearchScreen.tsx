import { StyleSheet } from 'react-native'
import ScreenLayout from '../components/ScreenLayout'
import SearchableView from '../components/header/SearchableView'
import { useEffect, useRef, useState } from 'react'
import { Input, Radio, RadioGroup } from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import { taskSelector } from '../redux/tasks/selectors'
import TaskList from '../components/list/TaskList'

const SearchScreen = () => {

    const tasks = useSelector(taskSelector)

    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [value, setValue] = useState<string>('')
    const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([])

    const inputRef = useRef<Input>(null)

    // Automatically focus search input when component is mounted
    useEffect(() => {
        inputRef?.current?.focus()
    }, [inputRef])

    // Filtering data while typing/selecting
    useEffect(() => {
        if (value.length === 0) {
            showResultByRadio(tasks)
        } else {
            const result = tasks.filter((item) => contains(item, value.toUpperCase()))
            showResultByRadio(result)
        }
    }, [value, selectedIndex, tasks])

    // Checking if item contains typed value
    const contains = (item: TaskType, formatted: string): boolean => {
        return item.title.toUpperCase().includes(formatted)
    }

    const showResultByRadio = (items: TaskType[]): void => {
        if (selectedIndex === 0) {
            setFilteredTasks(items)
            return
        }
        if (selectedIndex === 1) {
            setFilteredTasks(items.filter((item) => item.finished === false))
            return
        }
        if (selectedIndex === 2) {
            setFilteredTasks(items.filter((item) => item.finished === true))
        }
    }

    return (
        <ScreenLayout>
            <SearchableView
                value={value}
                onChange={(text) => setValue(text)}
                ref={inputRef}
                style={styles.input}
            />
            <RadioGroup
                style={styles.radio}
                selectedIndex={selectedIndex}
                onChange={(index) => setSelectedIndex(index)}
            >
                <Radio>Všetky</Radio>
                <Radio>Začaté</Radio>
                <Radio>Dokončené</Radio>
            </RadioGroup>
            <TaskList items={filteredTasks} />
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingTop: 5
    },
    radio: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    list: {
        paddingHorizontal: 15
    }
})

export default SearchScreen
