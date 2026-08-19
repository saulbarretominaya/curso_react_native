import { StyleSheet, View, Text } from 'react-native';

const Padding = () => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.caja1}></View>
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

    caja3: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        paddingTop: 50,
        paddingLeft: 10,       
    }

});

// Padding
// El padding crea un espacio INTERNO entre el borde del componente y su contenido.
// Se utiliza principalmente en componentes que contienen elementos hijos (recordar esto), para evitar que estos queden pegados al borde.
// El padding NO mueve el componente de lugar.
// Lo que se desplaza es el contenido que está dentro del componente.
//
// En este ejemplo:
// - La caja verde mantiene su tamaño de 100x100.
// - El Text se separa 50 px del borde superior.
// - El Text se separa 10 px del borde izquierdo.
//
// Analogía:
// Imagina una habitación con una persona dentro.
// La habitación no cambia de lugar ni de tamaño.
// Lo único que haces es pedirle a la persona que se aleje de las paredes.
// Ese espacio que queda entre la persona y las paredes representa el padding.




