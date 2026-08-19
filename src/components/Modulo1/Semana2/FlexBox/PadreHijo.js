import { StyleSheet, View } from 'react-native';

const PadreHijo = ()  => {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo}></View>
        </View>

    );
}

export default PadreHijo;

const styles = StyleSheet.create({

    padre: {
        backgroundColor: 'black',
        height: 150,
        width: 150,
    },

    hijo: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },

});


// El hijo normalmente se organiza dentro del padre y depende de su espacio disponible.
// Sin embargo, el hijo puede desbordar o sobrepasar el tamaño del padre si sus dimensiones son mayores.
// Sin embargo, no es recomendable que el hijo desborde al padre, ya que puede causar problemas de diseño y usabilidad en la interfaz de usuario. 


