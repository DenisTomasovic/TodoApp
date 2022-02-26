import React from 'react'
import { StyleSheet, ViewProps } from 'react-native'
import { Layout } from '@ui-kitten/components'
import Colors from '../constants/Colors'

const ScreenLayout = ({ ...props }: ViewProps) => {
    return (
        <Layout style={[styles.layout, props.style]}>
            { props.children }
        </Layout>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: Colors.background
    }
})

export default ScreenLayout
