import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './RootNavigator'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'
import { loadingErrorSelector, errorRequestSelector } from '../../redux/global/selectors'
import { useEffect } from 'react'
import AppLoading from '../../components/AppLoading'

const MainNavigator = () => {

    const error = useSelector(errorRequestSelector)
    const loading = useSelector(loadingErrorSelector)

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <NavigationContainer>
            <RootNavigator />
            <StatusBar style="auto" />
            <AppLoading show={loading} />
        </NavigationContainer>
    )
}

export default MainNavigator
