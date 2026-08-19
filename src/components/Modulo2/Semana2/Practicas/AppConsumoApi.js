
const AppConsumoApi = () => {

    // Función asíncrona para consultar la API
    const consultarApiPersonas = async () => {

        // Realizamos una petición GET al endpoint
        const obtenerDatosApi = await fetch("https://6a7fc151ec7a640e63ab7155.mockapi.io/Personas");

        // Convertimos la respuesta a formato JSON
        const convertirJson = await obtenerDatosApi.json();

        // Mostramos los datos obtenidos
        console.log(JSON.stringify(convertirJson, null, 2));
    }

    // Ejecutamos la función
    consultarApiPersonas();

    return (
        <>

        </>
    )
}

export default AppConsumoApi


// NOTA:
// Para consumir una API no es obligatorio utilizar Axios.
// También podemos utilizar fetch(), que permite realizar peticiones HTTP.

// MANEJO DE OPERACIONES ASÍNCRONAS:
// Una petición a una API puede tardar en responder, por lo que se maneja
// de forma asíncrona para no bloquear innecesariamente la aplicación.
//
// El uso de un loader y el bloqueo de la interfaz dependerá del proceso:
// si la operación es crítica, podemos bloquear toda la interfaz hasta que
// termine; si no, podemos bloquear únicamente la parte que depende de ella.
//
// En resumen: no toda operación asíncrona debe bloquear toda la aplicación.
// Depende de cómo se diseñe el flujo y de qué acciones deban permitirse
// mientras la petición está en proceso.

// Analogía:
// Síncrono → Pido pizza → espero → llega la pizza → continúo.
// Asíncrono → Pido pizza → hago otras cosas → llega la pizza → continúo.

// async → indica que la función trabajará con operaciones asíncronas.
// await → espera el resultado de una operación antes de continuar con la siguiente línea dentro de la función.