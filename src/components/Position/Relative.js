import { StyleSheet, View } from 'react-native';

export default function Relative() {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo1}></View>
            <View style={styles.hijo2}></View>
            <View style={styles.hijo3}></View>
        </View>
    );
}

const styles = StyleSheet.create({

    padre: {
        backgroundColor: 'black',
        width: 300,
        height: 300,
    },

    hijo1: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    hijo2: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: 'relative',
        left: 50,
    },
    hijo3: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
    }
});

// Relative mueve visualmente el componente, pero mantiene reservado su espacio original dentro del flujo.
// left empuja el componenente hacia la derecha