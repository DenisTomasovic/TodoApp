import { forwardRef, Ref } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { Input, Layout } from '@ui-kitten/components'
import ClassicInput from '../input/ClassicInput'

type SearchProps = {
    value?: string
    onPress?: () => void
    onChange?: (value: string) => void
    style?: ViewStyle
}

const SearchableView = ({ value, onPress, onChange, style }: SearchProps, ref: Ref<Input> | undefined) => {
    return (
        <Layout style={[styles.layout, style]}>
            <View style={styles.wrapper}>
                <ClassicInput
                    ref={ref}
                    value={value}
                    title='Vyhľadať...'
                    icon='search'
                    onPress={onPress}
                    onChange={onChange}
                    style={styles.input}
                />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: 'transparent',
        paddingTop: 25,
        paddingHorizontal: 15
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        marginTop: 15
    }
})

export default forwardRef(SearchableView)
