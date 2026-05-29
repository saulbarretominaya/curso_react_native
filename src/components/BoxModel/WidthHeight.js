import { StyleSheet, View } from 'react-native';

export default function WidthHeight() {
    return (
        <View>
            <View style={styles.caja1}></View>
        </View>

    );
}

const styles = StyleSheet.create({

    caja1: {
        backgroundColor: 'red',
        width:100,
        height:100
    }

});


// El Width y el Height son las dimensiones de un componente, es decir, su ancho y su alto respectivamente.

