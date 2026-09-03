import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { obtenerPeliculaPorId } from "../api/peliculasService";
import { BASE_URL_IMAGENES } from "../utils/constantes";
const Detalle = ({ route }) => {

    const { id } = route.params;
    const [pelicula, setPelicula] = useState(null);


    useEffect(() => {
        obtenerPeliculaPorId(id).then((resultado) => {
            setPelicula(resultado);
        });

    }, []);

    if (!pelicula) {
        return (
            <View>
                <Text>Cargando...</Text>
            </View>
        );
    }

    return (
        <View>
            <Image
                source={{
                    uri: `${BASE_URL_IMAGENES}${pelicula.poster_path}`
                }}
                style={{
                    width: 200,
                    height: 300
                }}
            />
            <Text>{pelicula.title}</Text>
            <Text>{pelicula.overview}</Text>
            <Text>Fecha de estreno: {pelicula.release_date}</Text>
            <Text>Duración: {pelicula.runtime} minutos</Text>
            <Text>Valoración: {pelicula.vote_average}</Text>
        </View>
    );
}

export default Detalle;