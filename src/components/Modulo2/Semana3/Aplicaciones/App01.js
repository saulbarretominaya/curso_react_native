import { useEffect, useState } from "react";
import { Text } from "react-native";
import { obtenerEmpleados, crearEmpleado, actualizarEmpleado, eliminarEmpleado } from "./servicios/empleadoService";
import FormularioEmpleado from "./componentes/FormularioEmpleado";

const App01 = () => {

    const [personas, setPersonas] = useState([]);
    // console.log(JSON.stringify(empleadoSeleccionado, null, 2));

    const empleadoActualizado = {
        nombre: "Saul",
        cargo: "Arquitecto de Software"
    }

    useEffect(() => {
        const consultar = async () => {
            // const resultado = await actualizarEmpleado("5", empleadoActualizado);
            const resultado = await eliminarEmpleado("5");
            const datos = await obtenerEmpleados();
            console.log("Empleados obtenidos:");
            console.log(JSON.stringify(datos, null, 2));
            setPersonas(datos);
        }
        consultar();

    }, []);

    const fnGuardarEmpleado = async (empleado) => {
        const resultado = await crearEmpleado(empleado);
        console.log("Empleado creado:");
        console.log(JSON.stringify(resultado, null, 2));
    }

    const nombre = "Saul";
    return (
        <>

            <FormularioEmpleado
                tipo_sexo={true}
                nombre={nombre}
                onGuardar={fnGuardarEmpleado}
            />


            {/* {personas.map((value) => (
                <Text key={value.id}>
                    {value.nombre}
                </Text>
            ))} */}

        </>
    );
}

export default App01


// Como buenas practicas, cuando pasamos una funcion como prop a un componente,
// es recomendable que el nombre de la prop comience con "on" + "Accion", por ejemplo:
// onSelect	    = cuando se seleccione
// onGuardar    = cuando se guarde
// onEliminar   = cuando se elimine
// onEditar	    = cuando se edite
// onCancelar   = cuando se cancele
// onEnviar	    = cuando se envíe

