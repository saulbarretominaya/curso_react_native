import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TareaScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.cajaMorada} ></View>
            <View style={styles.cajaNaranja} ></View>
            <View style={styles.cajaAzul} ></View>
        </View>
    )
}

export default TareaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    cajaMorada: {
        width: 100,
        // height: 100,
        backgroundColor: 'purple',
        borderWidth: 10,
        borderColor: 'white',
        // alignSelf:'flex-end'
        // position: 'absolute',
        // top: 0,
        // left: 0,
    },
    cajaNaranja: {
        width: 100,
        // height: 100,
        backgroundColor: 'yellow',
        borderWidth: 10,
        borderColor: 'white',
        // alignSelf:'flex-start'
        // position: 'absolute',
        // top: 90,
        // left: 0,
        // bottom: 50,
        // right: 50,
    },
    cajaAzul: {
        width: 100,
        // height: 100,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: 'white',
        // alignSelf:'center'
        // position: 'absolute',
        // top:180,
        // left:0
    }
})