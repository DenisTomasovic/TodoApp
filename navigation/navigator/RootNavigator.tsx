import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/Navigation'
import CategoryListScreen from '../../screens/CategoryListScreen'
import { HeaderStackOptions } from '../option/StackOptions'
import AddTaskScreen from '../../screens/AddTaskScreen'
import SearchScreen from '../../screens/SearchScreen'
import ProgressListScreen from '../../screens/ProgressListScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Category'
                component={CategoryListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Group screenOptions={HeaderStackOptions({ presentation: 'modal' })}>
                <Stack.Screen
                    name='Task'
                    component={ProgressListScreen}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='AddTask'
                    component={AddTaskScreen}
                    options={{ headerTitle: 'Pridať úlohu' }}
                />
                <Stack.Screen
                    name='Search'
                    component={SearchScreen}
                    options={{ headerTitle: 'Vyhľadať' }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default RootNavigator
