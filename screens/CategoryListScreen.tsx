import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesRequest } from '../redux/categories/actions'
import { categorySelector } from '../redux/categories/selectors'
import ScreenLayout from '../components/ScreenLayout'
import FooterButton from '../components/button/FooterButton'
import CategoryList from '../components/list/CategoryList'
import CategoryModal from '../components/category-modal/CategoryModal'
import HeaderView from '../components/header/HeaderView'
import { RootStackScreenProps } from '../types/Navigation'

const CategoryListScreen = ({ navigation }: RootStackScreenProps<'Category'>) => {

    const dispatch = useDispatch()

    const categories = useSelector(categorySelector)

    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getCategoriesRequest())
    }, [])

    return (
        <ScreenLayout>
            <HeaderView title='Zoznam kategórií' style={styles.header} />
            <CategoryList
                onPress={(categoryId, name) => navigation.navigate('Task', { categoryId, name })}
                items={categories}
            />
            <FooterButton
                title='Pridať novú kategóriu'
                onPress={() => setVisibleModal(true)}
            />
            <CategoryModal
                isVisible={visibleModal}
                onPress={() => setVisibleModal(false)}
            />
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30
    }
})

export default CategoryListScreen
