import { StyleSheet } from 'react-native'
import { List } from '@ui-kitten/components'
import CategoryListItem from './CategoryListItem'

type ListProps = {
    items: CategoryType[],
    onPress: (id: string, name: string) => void
}

const CategoryList = ({ items, onPress }: ListProps) => {

    const renderItem = ({ item }: RenderItem<CategoryType>): JSX.Element => {
        return <CategoryListItem onPress={(id, name) => onPress(id, name)} item={item} />
    }

    return (
        <List
            data={items}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            style={{ backgroundColor: 'transparent' }}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 15,
        paddingBottom: 65
    }
})

export default CategoryList
