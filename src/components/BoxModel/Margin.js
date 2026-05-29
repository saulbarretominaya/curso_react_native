import { StyleSheet, View } from 'react-native';

export default function Margin() {
    return (
        <View>
            <View style={styles.caja1}></View>
            <View style={styles.caja2}></View>
        </View>

    );
}

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
        marginLeft:100
    }

});

// El Margin es la separación EXTERNA entre componentes



