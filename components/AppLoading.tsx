import { StyleSheet, ActivityIndicator } from 'react-native'
import ScreenLayout from './ScreenLayout'
import Colors from '../constants/Colors'

type LoadingProps = {
    show: boolean
}

const AppLoading = ({ show }: LoadingProps) => {

    if (!show) {
        return null
    }

    return (
        <ScreenLayout style={styles.layout}>
            <ActivityIndicator size='large' color={Colors.tint}/>
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: 'rgba(45, 45, 45, 0.5)',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
    }
})

export default AppLoading
