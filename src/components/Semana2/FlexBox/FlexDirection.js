import { StyleSheet, View } from 'react-native';

const FlexDirection = () => {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo}></View>
            <View style={styles.hijo2}></View>
            <View style={styles.hijo3}></View>
        </View>
    );
}

export default FlexDirection;

const styles = StyleSheet.create({

    padre: {
        backgroundColor: 'black',
        height: 300,
        width: 300,
        flexDirection: 'column',
        // flexDirection:'row'
    },

    hijo: {
        backgroundColor: 'red',
        width: 100,
        height: 100
        
    },

    hijo2: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
    },

    hijo3: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
    }

});

// flexDirection: 'column' (predeterminado) organiza los elementos de arriba hacia abajo, mientras que flexDirection: 'row' los organiza de izquierda a derecha.
// column organiza los hijos verticalmente.
// row organiza los hijos horizontalmente.



