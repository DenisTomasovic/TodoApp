import { useDispatch } from 'react-redux'
import { addCategoriesRequest } from '../../redux/categories/actions'
import { StyleSheet, Modal, View } from 'react-native'
import { Text } from '@ui-kitten/components'
import { Controller, useForm } from 'react-hook-form'
import FooterButton from '../button/FooterButton'
import Colors from '../../constants/Colors'
import Ionicon from 'react-native-vector-icons/Ionicons'
import ClassicInput from '../input/ClassicInput'
import { CategoryAddRequest } from '../../services/CategoryService'
import { categoryTitleRules } from '../../constants/Rules'

type ModalProps = {
    isVisible: boolean
    onPress: () => void
}

const CategoryModal = ({ isVisible, onPress }: ModalProps) => {

    const dispatch = useDispatch()

    const { control, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm<CategoryAddRequest>({
        defaultValues: {
            title: ''
        }
    })

    // Closing modal and set input value to empty string
    const modalClose = (): void => {
        setValue('title', '')
        clearErrors()
        onPress()
    }

    // Make request - add a new category
    const onSubmit = (value: CategoryAddRequest): void => {
        dispatch(addCategoriesRequest(value))
        modalClose()
    }

    return (
        <Modal
            visible={isVisible}
            transparent
            animationType='slide'
        >
            <View style={styles.modal}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Pridať kategóriu</Text>
                        <Ionicon
                            name='close'
                            color={Colors.background}
                            size={26}
                            onPress={modalClose}
                        />
                    </View>

                    <Controller
                        name='title'
                        control={control}
                        rules={categoryTitleRules}
                        render={({ field: { onChange, value } }) => (
                            <ClassicInput
                                title='Názov kategórie'
                                value={value}
                                onChange={onChange}
                                style={styles.input}
                                caption={errors?.title?.message}
                            />
                        )}
                    />

                    <FooterButton
                        title='Uložiť'
                        iconShown={false}
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'center'
    },
    container: {
        backgroundColor: '#4b4b4b',
        width: '80%',
        minWidth: 200,
        height: 200,
        elevation: 1,
        borderRadius: 4,
        alignSelf: 'center'
    },
    wrapper: {
        paddingHorizontal: 15,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: Colors.white,
        fontSize: 18
    },
    input: {
        paddingHorizontal: 15,
        marginTop: 28
    },
    inputText: {
        color: Colors.white,
        fontSize: 16,
        paddingVertical: 2
    }
})

export default CategoryModal
