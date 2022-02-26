import { StyleSheet } from 'react-native'
import { Button, Layout, Text } from '@ui-kitten/components'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Colors from '../../constants/Colors'

type ButtonProps = {
    title: string
    onPress: () => void,
    iconShown?: boolean
}

const FooterButton = ({ title, onPress, iconShown = true }: ButtonProps) => {

    const renderTitle = (): JSX.Element => {
        return <Text style={styles.title}>{title}</Text>
    }

    const renderIcon = (): JSX.Element => {
        return <Ionicon name='add-outline' color={Colors.button.tint} size={24}/>
    }

    return (
        <Layout style={styles.layout}>
            <Button
                onPress={onPress}
                accessoryLeft={iconShown ? renderIcon : undefined}
            >
                { renderTitle }
            </Button>
        </Layout>
    )
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: 'transparent',
        bottom: 15,
        paddingHorizontal: 15,
        position: 'absolute',
        width: '100%'
    },
    button: {
        backgroundColor: Colors.button.background,
        borderWidth: 0
    },
    title: {
        color: Colors.button.tint
    }
})

export default FooterButton
