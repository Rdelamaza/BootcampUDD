//Preguntas tipo encuesta
const preguntas = [
    {
    pregunta: "¿Cuál de estas plantas prefieres para interiores?",
    alternativas: ["Cactus", "Monstera", "Palmera", "Helecho"],
    resultados: {},
    },
    {
    pregunta: "¿Qué tamaño de planta ornamental prefieres?",
    alternativas: ["Pequeña", "Mediana", "Grande"],
    resultados: {},
    },
    {
    pregunta: "¿Qué tipo de mantenimiento prefieres para tus plantas?",
    alternativas: ["Frecuente", "moderado", "casi nada"],
    resultados: {},
    },
    {
    pregunta: "¿Qué te gusta más en una planta ornamental?",
    alternativas: ["Flores", "Follaje", "Diseño"],
    resultados: {},
    },
    {
    pregunta: "¿Dónde pondrias tus plantas ornamentales?",
    alternativas: ["Ventana", "Sala", "Cocina", "Habitacion"],
    resultados: {},
    },
    {
    pregunta: "¿Cuál crees que es el mayor beneficio de tener plantas ornamentales en casa?",
    alternativas: ["Purifican el aire", "Reducen el estrés", "Decoración", "Aportan frescura al ambiente"],
    resultados: {},
    },
    {
    pregunta: "¿Qué estilo prefieres para tus plantas ornamentales?",
    alternativas: ["Minimalista", "Tropical", "Desértico", "Clasico"],
    resultados: {},
    },
    {
    pregunta: "¿Qué planta ornamental recomendarías para principiantes?",
    alternativas: ["Suculentas", "Pothos", "Sansevieria", "Drácena"],
    resultados: {},
    },
];

//Funcion flecha que contiene las preguntas
const crearEncuesta = (preguntas) => {
    return {
        preguntas: preguntas
    }
};
//Funcion para agregar voto
function agregarVoto (pregunta, alternativaSeleccionada){
    if(pregunta.alternativas === pregunta.alternativas.includes(alternativaSeleccionada)){
        if(pregunta.resultados[alternativaSeleccionada]){
            pregunta.resultados[alternativaSeleccionada]++;
        } else {
            pregunta.resultados[alternativaSeleccionada] = 1;
        }
    }else {
        console.log("La opcion escrita no existe");
        alert("La opcion escrita no existe");
    }
    
}
// Funcion para mostrar resultados de una pregunta.
function mostrarResultados(pregunta) {
    console.log(`Resultados para la pregunta: "${pregunta.pregunta}":`);
    for (let opcion of pregunta.alternativas){
        console.log(
            `Alternativa "${opcion}": ${pregunta.resultados[opcion] || 0 } votos`
        );
        
    }
    
}

//Funcion para que usuario pueda votar en pregunta
function votar(pregunta) {
    const alternativaSeleccionada = prompt(
        `Pregunta :${ pregunta.pregunta}
        \nSelecione una alternativa (${pregunta.alternativas.join(", ")}):
        `

    );

    if (alternativaSeleccionada != null) {
        agregarVoto(pregunta, alternativaSeleccionada.trim());
    } else {
        console.log("Votacion Cancelada");
        
    }

}

//Funcion para ejecutar encuesta
function ejecutarEncuesta(){
    const encuesta = crearEncuesta(preguntas);

    function ejecutarEncuestaCompleta(){
        for (let i = 0; i < encuesta.preguntas.length; i++) {
            votar(encuesta.preguntas[i]);
        }
    }

ejecutarEncuestaCompleta();
    let seguirVotando = true;

    while (seguirVotando) {
        seguirVotando = confirm("¿Desea seguir votando?");
        if (seguirVotando) {
            ejecutarEncuestaCompleta();
            
        } else {
            console.log("Encuesta Finalizada. Resultados");
        }
        mostrarResultados(pregunta);
    }


    encuesta.preguntas.forEach(mostrarResultados);
}

ejecutarEncuesta();