import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

export const DimensionesScreen = () => {
    const { width, height } = useWindowDimensions();
    return (

        <View style={styles.container} >
            <View style={styles.cajaMorada} ></View>
            <View style={styles.cajaNaranja} ></View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        backgroundColor: '#28c4d9',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: 400,
        height: 400,
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        // top: 50,
        // left: 50,
        position: 'absolute',
        bottom: 0,
        right: 0,
        // alignSelf: 'center',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#f0a500',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',

    }

})