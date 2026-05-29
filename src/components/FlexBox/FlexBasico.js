import { StyleSheet, View } from 'react-native';

export default function FlexBasico() {
    return (
        <View style={styles.padre}>
            <View style={styles.hijo}></View>
        </View>

    );
}

const styles = StyleSheet.create({

    padre: {
        backgroundColor: 'black',
        height: 150,
        width: 150,
        
    },

    hijo: {
        backgroundColor: 'red',
        // width: 100,
        // height: 100,
        flex: 1,
    },

});


// Sin Flex el hijo tiene tamaño fijo con width y height.
// Con Flex el hijo se adapta automáticamente al tamaño del padre





