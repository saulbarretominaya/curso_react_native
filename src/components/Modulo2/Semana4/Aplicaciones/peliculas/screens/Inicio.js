import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { obtenerPeliculas } from "../api/peliculasService";
import TarjetaPelicula from "../components/TarjetaPelicula";

const Inicio = ({navigation}) => {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {

        obtenerPeliculas().then((resultado) => {
            // console.log(resultado);
            setPeliculas(resultado);
        });

    }, []);

    return (
        <View>
            <Text>Películas</Text>
            <FlatList
                data={peliculas}
                renderItem={({ item }) => (
                    <TarjetaPelicula
                        pelicula={item}
                        navigation={navigation}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default Inicio;
