import { Pressable } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

const PressableIcon = ({ name, color, onPress, size }: IconPressType) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicon
                name={name}
                color={color}
                size={size}
            />
        </Pressable>
    )
}

export default PressableIcon
