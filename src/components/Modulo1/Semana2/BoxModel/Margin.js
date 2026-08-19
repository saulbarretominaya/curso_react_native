import { StyleSheet, View } from 'react-native';

const Margin = () => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.caja1}></View>
            <View style={styles.caja2}></View>
        </View>

    );
}

export default Margin;


const styles = StyleSheet.create({
    contenedor: {
        // borderWidth: 2,
        // borderColor: 'black',
        // backgroundColor: 'yellow',
    },

    caja1: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
        borderColor: 'black',
    },

    caja2: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        marginTop: 100,
        marginLeft: 100
    },


});

// Margin
// El margin crea un espacio EXTERNO alrededor de un componente.
// El margin NO aumenta el tamaño del componente.
// Solo agrega espacio alrededor de él, por lo que parece que el componente se mueve.
//
// Analogía:
// Imagina que una persona está parada en una habitación y le pides que
// se desplace hacia la derecha. La persona sigue siendo del mismo tamaño;
// simplemente cambia de posición y deja un espacio vacío a su izquierda.
// Ese espacio vacío representa el margin.


