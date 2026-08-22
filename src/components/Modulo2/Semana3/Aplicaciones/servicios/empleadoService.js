const URL_API = "https://6a7fc151ec7a640e63ab7155.mockapi.io/Personas";

export const obtenerEmpleados = async () => {
    const respuesta = await fetch(URL_API);
    const datos = await respuesta.json();
    return datos;
}

export const crearEmpleado = async (empleado) => {
    //Aqui le decimos a fetch no quiero consultar, quiero enviar/crear información.
    const respuesta = await fetch(URL_API, {
        method: "POST",
        // Aquí decimos lo que te estoy enviando está en formato JSON.
        headers: {
            "Content-Type": "application/json"
        },
        // Aqui, JavaScript lo tiene como objeto y para enviarlo a la API lo convertimos a JSON.
        body: JSON.stringify(empleado)
    });
    const datos = await respuesta.json();
    return datos;
}

export const actualizarEmpleado = async (id, empleado) => {
    const respuesta = await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(empleado)
    });
    const datos = await respuesta.json();
    return datos;
}

export const eliminarEmpleado = async (id) => {
    const respuesta = await fetch(`${URL_API}/${id}`, {
        method: "DELETE"
    });
    const datos = await respuesta.json();
    return datos;
}
