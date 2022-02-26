import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import Colors from '../../constants/Colors'

export const HeaderStackOptions = ({ ...props }): NativeStackNavigationOptions => {
    return {
        headerStyle: {
            backgroundColor: Colors.backgroundTint
        },
        headerTitleStyle: {
            color: Colors.white,
            fontWeight: '400',
            fontSize: 20
        },
        headerTintColor: Colors.tint,
        ...props
    }
}
