import { StyleSheet, View } from 'react-native';

const  Zindex = () => {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo1}></View>
            <View style={styles.hijo2}></View>
            <View style={styles.hijo3}></View>
        </View>
    );
}

export default Zindex;

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
        zIndex: 1,
    },
    hijo3: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
    }
});

// zIndex controla el orden de apilamiento de los componentes.
// El componente con mayor zIndex se muestra por encima de los demás.
// Solo funciona con componentes posicionados (relative, absolute o fixed).
