// Variables para almacenar los diálogos
let analistaPregunta1 = "Para comenzar, ¿podría listar en forma general cada uno de los temas que el sistema debe cubrir?";
let usuarioRespuesta1 = "Claro. El sistema debe permitirnos definir y gestionar variables para almacenar información sobre tareas, plazos y recursos. Necesitamos ciclos para iterar a través de listas de tareas y actualizar estados. La funcionalidad de switch es crucial para manejar diferentes estados de tareas, y condicionales para tomar decisiones basadas en los plazos y prioridades de las tareas.";

let analistaPregunta2 = "Entendido. Hablemos un poco más sobre las variables. ¿Qué tipo de datos necesitan manejar y cómo se estructurarán?";
let usuarioRespuesta2 = "Principalmente manejamos datos de texto para las descripciones de las tareas, fechas y horas para los plazos, y booleanos para estados de finalización. Además, necesitamos la capacidad de definir categorías y etiquetas para las tareas.";

let analistaPregunta3 = "Muy bien. ¿Y en cuanto a los ciclos? ¿Qué tipo de iteraciones son más comunes en sus procesos diarios?";
let usuarioRespuesta3 = "Usamos ciclos para revisar y actualizar listas de tareas diariamente. Tanto for loops para iteraciones sobre listas de tareas, como while loops para condiciones de monitoreo continuo.";

let analistaPregunta4 = "Perfecto. ¿Podría proporcionarme un ejemplo de una situación donde un switch sería útil en su sistema de planificación?";
let usuarioRespuesta4 = "Sí, por supuesto. Utilizamos switch para manejar los diferentes estados de las tareas, como 'pendiente', 'en progreso', 'completada', y 'atrasada'. Dependiendo del estado, el sistema debe realizar acciones específicas.";

let analistaPregunta5 = "Y en cuanto a las condicionales, ¿cómo se utilizan para la toma de decisiones en sus procesos?";
let usuarioRespuesta5 = "Las condicionales son esenciales para validar plazos y prioridades. Por ejemplo, si una tarea está cerca de su fecha límite, necesitamos que el sistema genere una alerta. También usamos condicionales para asignar recursos y reordenar prioridades.";

// Variable para almacenar las tareas
let tareas = [];

// Función para agregar tareas
function agregarTarea(descripcion, fecha, estado) {
    let tarea = {
        descripcion: descripcion,
        fecha: fecha,
        estado: estado,
        categoria: "",
        etiquetas: []
    };
    tareas.push(tarea);
}

// Función para mostrar tareas
function mostrarTareas() {
    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i + 1}. ${tareas[i].descripcion} - ${tareas[i].estado} (Fecha: ${tareas[i].fecha})`);
    }
}

// Función para cambiar el estado de una tarea usando switch
function cambiarEstadoTarea(index, nuevoEstado) {
    if (index < 0 || index >= tareas.length) {
        console.log("Índice de tarea no válido.");
        return;
    }

    switch (nuevoEstado) {
        case "pendiente":
        case "en progreso":
        case "completada":
        case "atrasada":
            tareas[index].estado = nuevoEstado;
            console.log(`Tarea "${tareas[index].descripcion}" cambiada a ${nuevoEstado}.`);
            break;
        default:
            console.log("Estado no válido.");
            break;
    }
}

// Función para verificar plazos usando condicionales
function verificarPlazos() {
    let hoy = new Date().toISOString().split('T')[0];
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].fecha <= hoy && tareas[i].estado !== "completada") {
            console.log(`¡Alerta! La tarea "${tareas[i].descripcion}" está cerca o ha pasado su fecha límite.`);
        }
    }
}
function simularEntrevista() {
    console.log("Analista: " + analistaPregunta1);
    console.log("Usuario Líder: " + usuarioRespuesta1);

    console.log("Analista: " + analistaPregunta2);
    console.log("Usuario Líder: " + usuarioRespuesta2);

    console.log("Analista: " + analistaPregunta3);
    console.log("Usuario Líder: " + usuarioRespuesta3);

    console.log("Analista: " + analistaPregunta4);
    console.log("Usuario Líder: " + usuarioRespuesta4);

    console.log("Analista: " + analistaPregunta5);
    console.log("Usuario Líder: " + usuarioRespuesta5);
}

// Llamar a la función para simular la entrevista y probar las funcionalidades
simularEntrevista();

agregarTarea("Tarea 1", "2024-11-20", "pendiente");
agregarTarea("Tarea 2", "2024-11-21", "en progreso");
agregarTarea("Tarea 3", "2024-11-22", "completada");

mostrarTareas();

cambiarEstadoTarea(0, "completada");

verificarPlazos();