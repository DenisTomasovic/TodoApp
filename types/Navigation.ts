import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
    Category: undefined
    Task: {
        categoryId: string
        name: string
    }
    AddTask: {
        categoryId: string
    }
    Search: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>
