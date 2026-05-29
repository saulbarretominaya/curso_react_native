import { StyleSheet, View } from 'react-native';

export default function FlexProporcional() {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo}></View>
            <View style={styles.hijo2}></View>
        </View>

    );
}

const styles = StyleSheet.create({

    padre: {
        backgroundColor: 'black',
        height: 300,
        width: 300,

    },

    hijo: {
        backgroundColor: 'red',
        flex: 1,
    },
    hijo2: {
        backgroundColor: 'blue',
        flex: 1,
    },

});


// Flex trabaja por proporciones entre hermanos. Pero sin salir del espacio del padre.






