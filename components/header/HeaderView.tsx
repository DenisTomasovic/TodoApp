import { StyleSheet, View, Pressable, ViewStyle } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import Colors from '../../constants/Colors'
import Ionicon from 'react-native-vector-icons/Ionicons'

type HeaderProps = {
    title: string
    onPress?: () => void
    style?: ViewStyle
}

const HeaderView = ({ title, onPress, style }: HeaderProps) => {
    return (
        <Layout style={[style, styles.layout]}>
            <View style={styles.wrapper}>
                {
                    onPress !== undefined &&
                    <Pressable onPress={onPress}>
                        <Ionicon name='arrow-back-outline' size={28} color={Colors.tint}/>
                    </Pressable>
                }
                <Text style={styles.title}>{ title }</Text>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: 'transparent',
        paddingBottom: 15,
        paddingHorizontal: 15
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: Colors.headerTitle,
        fontSize: 25
    }
})

export default HeaderView
