import { StyleSheet, View, Text } from 'react-native';

const Padding = () => {
    return (
        <View>
            <View style={styles.caja1}></View>
            <View style={styles.caja2}></View>
            <View style={styles.caja3}>
                <Text>Hola soy un Padding</Text>
            </View>
        </View>

    );
}

export default Padding;

const styles = StyleSheet.create({

    caja1: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    },

    caja2: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        marginTop: 100,
        marginleft: 100
    },

    caja3: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        paddingTop: 50,
        paddingLeft: 10,
    }

});

// El Padding es la separación INTERNA entre el borde del componente y su contenido.
// Es decir, se aplica para separar el espacio que hay entre el componente padre y sus hijos.




