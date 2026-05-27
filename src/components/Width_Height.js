import { StyleSheet, View } from 'react-native';

export default function Width_Height() {
    return (
        <View style={styles.container}>
            <View style={styles.caja1}></View>
        </View>

    );
}

const styles = StyleSheet.create({
    // El padre es el que controla a los hijos, el hijo no puede controlar al padre
    container: {
        flex: 1, // Ocupa toda la pantalla
        justifyContent: 'center', // Alinea verticalmente
        alignItems: 'center' // Alinea horizontalmente
    },

    caja1: {
        backgroundColor: 'red',
        width: 200,
        height: 200
    }
});
