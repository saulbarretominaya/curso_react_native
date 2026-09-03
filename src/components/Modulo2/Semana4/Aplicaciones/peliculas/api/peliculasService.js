import { API_HOST, API_KEY, IDIOMA } from "../utils/constantes";


export const obtenerPeliculas = async () => {

    const url =
        `${API_HOST}/movie/now_playing` +
        `?api_key=${API_KEY}` +
        `&language=${IDIOMA}` +
        `&page=1`;

    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.results;
};

export const obtenerPeliculaPorId = async (id) => {

    const url =
        `${API_HOST}/movie/${id}` +
        `?api_key=${API_KEY}` +
        `&language=${IDIOMA}`;

    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos);
    return datos;
};