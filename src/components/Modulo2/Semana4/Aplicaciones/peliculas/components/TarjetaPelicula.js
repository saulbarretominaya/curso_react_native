import { View, Text, Image, TouchableOpacity } from "react-native";
import { BASE_URL_IMAGENES } from "../utils/constantes";

const TarjetaPelicula = ({ pelicula, navigation }) => {

    // console.log(pelicula.poster_path);

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Detalle", {
                        id: pelicula.id
                    });
                }}
            >
                <Image
                    source={{
                        uri: `${BASE_URL_IMAGENES}${pelicula.poster_path}`
                    }}
                    style={{
                        width: 150,
                        height: 220
                    }}
                />
                <Text>{pelicula.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TarjetaPelicula;