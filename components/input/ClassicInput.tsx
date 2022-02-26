import { forwardRef, LegacyRef } from 'react'
import { StyleSheet, Pressable, View, ViewStyle } from 'react-native'
import { Input, Text } from '@ui-kitten/components'
import Colors from '../../constants/Colors'
import PressableIcon from '../icon/PressableIcon'

type InputProps = {
    title: string
    value?: string
    onChange?: (value: string) => void
    onPress?: () => void
    style?: ViewStyle
    icon?: string
    caption?: string
}

const ClassicInput = ({ title, value, onChange, onPress, style, icon, caption }: InputProps, ref: LegacyRef<Input> | undefined) => {

    // if param icon is defined, there will be rendered icon component
    const renderIcon = (name: string): JSX.Element => {
        return PressableIcon({
            name: name,
            color: Colors.card.icon,
            size: 22
        })
    }

    // onPress param makes whole input clickable, if there is no onPress param, input has normal behaviour
    const renderPressable = (): JSX.Element | null  => {
        if (onPress !== undefined) {
            return <Pressable style={styles.pressable} onPress={onPress} />
        }
        return null
    }

    // Rendering caption when form is not valid
    const renderCaption = (): JSX.Element => {
        return <Text style={styles.caption}>{caption}</Text>
    }

    return (
        <View style={[style, styles.layout]} >
            <Input
                status={caption && 'warning'}
                caption={renderCaption}
                ref={ref}
                placeholderTextColor={Colors.gray}
                value={value}
                placeholder={title}
                onChangeText={onChange}
                accessoryRight={icon ? renderIcon(icon) : undefined}
            />
            { renderPressable() }
        </View>

    )
}

const styles = StyleSheet.create({
    layout: {
        marginBottom: 8
    },
    pressable: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    caption: {
        color: Colors.red,
        fontSize: 12,
        paddingTop: 2
    }
})

export default forwardRef(ClassicInput)
