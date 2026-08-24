import { useEffect, useState } from "react";
import { obtenerEmpleados, crearEmpleado, actualizarEmpleado, eliminarEmpleado } from "./servicios/EmpleadoService";
import FormularioEmpleado from "./componentes/FormularioEmpleado";
import ListaEmpleados from "../../Semana3/Aplicaciones/componentes/ListaEmpleados";
import DetalleEmpleados from "../../Semana3/Aplicaciones/componentes/DetalleEmpleados";
import { ScrollView } from "react-native";

const App01 = () => {

    const [empleados, setEmpleados] = useState([]);
    const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

    useEffect(() => {
        const consultar = async () => {
            const datos = await obtenerEmpleados();
            setEmpleados(datos);
        }
        consultar();
        // Ese [] significa: "Ejecuta este useEffect solamente cuando App01 se monta por primera vez
    }, []);

    const fnGuardarEmpleado = async (empleado) => {
        const nuevo_empleado = await crearEmpleado(empleado);
        const unir_empleados = [...empleados, nuevo_empleado];
        setEmpleados(unir_empleados);
    }

    const fnActualizarEmpleado = async (empleado) => {
        // Aquí me devuelve todo el arreglo que modifique, una fila devuelve el PUT
        const empleadoActualizado = await actualizarEmpleado(empleado.id, empleado);
        //Y aqui lo reemplazo por el existente para que se actualice en el UI, por eso que es obligatorio traer la constante 
        const empleadosActualizados = empleados.map((empleadoActual) => {
            if (empleadoActual.id === empleadoActualizado.id) {
                return empleadoActualizado;
            }
            return empleadoActual;
        });
        setEmpleados(empleadosActualizados);
    }

    const fnEliminarEmpleado = async (empleado) => {
        // Recupero el id, porque es lo unico que necesito
        const idEmpleado = empleado.id;
        // Aqui no es necesario crear una constante porque no hay nada que reemplazar, igual devuelve una fila el DELETE, Pero no lo usaremos
        await eliminarEmpleado(idEmpleado);
        const empleadosActualizados = empleados.filter((empleadoActual) => empleadoActual.id !== idEmpleado);
        setEmpleados(empleadosActualizados);
        setEmpleadoSeleccionado(null);
    }

    return (
        <>
            <ScrollView>
                <FormularioEmpleado
                    onGuardar={fnGuardarEmpleado}
                    onActualizar={fnActualizarEmpleado}
                    empleado={empleadoSeleccionado}
                />
                <ListaEmpleados
                    empleados={empleados}
                    onSelect={setEmpleadoSeleccionado}
                />

                <DetalleEmpleados
                    empleados={empleadoSeleccionado}
                    onEliminar={fnEliminarEmpleado}
                />

            </ScrollView>
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

