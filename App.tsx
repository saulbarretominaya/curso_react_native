import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'

export const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BoxObjectModelScreen />
        </SafeAreaView>
    )
}

