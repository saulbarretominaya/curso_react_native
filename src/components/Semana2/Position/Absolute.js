import { StyleSheet, View } from 'react-native';

const Absolute = () =>  {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo1}></View>
            <View style={styles.hijo2}></View>
            <View style={styles.hijo3}></View>
        </View>
    );
}

export default Absolute;

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
        position: 'absolute',
        left: 50,
        top:50,
    },
    hijo3: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
    }
});

// Absolute saca el componente del flujo normal.
// Los demás componentes se reorganizan como si no existiera.
// top y left se calculan desde el contenedor padre.
