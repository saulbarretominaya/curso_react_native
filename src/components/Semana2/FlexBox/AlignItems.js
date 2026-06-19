import { StyleSheet, View } from 'react-native';

const AlignItems = () => {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo}></View>
            <View style={styles.hijo2}></View>
            <View style={styles.hijo3}></View>
        </View>

    );
}

export default AlignItems;

const styles = StyleSheet.create({

    padre: {
        backgroundColor: 'black',
        height: 300,
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    hijo: {
        backgroundColor: 'red',
        width: 50,
        height: 50

    },

    hijo2: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
    },

    hijo3: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
    }

});


// flexDirection: 'column' es el eje principal (imaginarlo como el eje Y vertical).
// alignItems distribuye los hijos en el eje transversal (imaginarlo como el eje X horizontal).
//   │  ◄── Plátano / Eje Principal (column)
// ──┼── Rodaja 1 (Hijo Rojo)     ◄── Corte transversal 1
// ──┼── Rodaja 2 (Hijo Azul)     ◄── Corte transversal 2
// ──┼── Rodaja 3 (Hijo Verde)    ◄── Corte transversal 3
// ──┼── 
//   ▼