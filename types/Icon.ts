type IconType = {
    name: string
    color?: string
    size?: number
}

type IconPressType = IconType & {
    onPress?: () => void
}
