import { StyleSheet } from 'react-native'
import { ListItem, Text } from '@ui-kitten/components'
import { useDispatch } from 'react-redux'
import { deleteCategoriesRequest } from '../../redux/categories/actions'
import PressableIcon from '../icon/PressableIcon'
import Colors from '../../constants/Colors'

type ItemProps = RenderItem<CategoryType> & {
    onPress: (id: string, name: string) => void
}

const CategoryListItem = ({ item, onPress }: ItemProps) => {

    const dispatch = useDispatch()

    const renderTitle = (): JSX.Element => {
        return <Text style={styles.title}>{item.title}</Text>
    }

    const renderIcon = (): JSX.Element => {
        return PressableIcon({
            name: 'trash-outline',
            size: 22,
            color: Colors.card.icon,
            onPress: () => dispatch(deleteCategoriesRequest({ id: item.id }))
        })
    }

    return (
        <ListItem
            onPress={() => onPress(item.id, item.title)}
            title={renderTitle}
            accessoryRight={renderIcon}
            style={styles.item}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.backgroundTint,
        marginBottom: 15,
        paddingVertical: 20,
        paddingHorizontal: 15,
        elevation: 1
    },
    title: {
        color: Colors.card.title
    },
    description: {
        color: Colors.card.desc
    }
})

export default CategoryListItem
