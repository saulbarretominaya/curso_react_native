import { StyleSheet, View } from 'react-native';

const JustifyContent = () => {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo}></View>
            <View style={styles.hijo2}></View>
            <View style={styles.hijo3}></View>
        </View>

    );
}

export default JustifyContent;

const styles = StyleSheet.create({

    padre: {
        backgroundColor: 'black',
        height: 300,
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
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


// justifyContent necesita espacio disponible dentro del padre para poder distribuir los hijos, ya sea con height y width o con flex.
// Si se omite height y width en el padre, justifyContent no tendrá efecto, ya que no habrá espacio para distribuir los hijos.
// justifyContent distribuye a los hijos a lo largo del eje principal (definido por flexDirection)
