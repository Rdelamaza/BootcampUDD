class Pregunta {
    constructor (pregunta, alternativas){
        this.pregunta = pregunta;
        this.alternativas = alternativas.map((alternativa)=> alternativa.trim());
        this.resultado = {};
    }

//Metodo para agregar voto a la alternativa
agregarVoto(alternativaSeleccionada){
    if(this.alternativas.includes(alternativaSeleccionada)){
        this.resultado[alternativaSeleccionada] =
            (this.resultado[alternativaSeleccionada] || 0) +1;
    } else {
        console.log("La alternativa seleccionada no es valida")
    }
}

//Metodo mostrar resultados
mostrarResultado(){
    console.log(`Resultado para la pegunta : "${this.pregunta}":`);
    this.alternativas.forEach((alternativa)=> {
        console.log(`Alternativa "${alternativa}": ${this.resultado[alternativa] || 0} votos `);
    });
    }
}


//Clase Encuesta
class Encuesta {
    constructor(){
        this.preguntas = [];
    }

    ejecutar(){
        let seguirVotando = true;
        while (seguirVotando) {
            this.preguntas.forEach((pregunta)=>this.votar(pregunta));
            seguirVotando = confirm("Desea seguir votando?");
            this.preguntas.forEach((pregunta)=> pregunta.mostrarResultado());
        }
    }
    
    votar(pregunta){
        const alternativaSeleccionada = prompt (
            `Pregunta :${pregunta.pregunta}\nSeleccione una alternativa (${pregunta.alternativas.join(', ')}):`
        );
        if (alternativaSeleccionada !== null) {
            pregunta.agregarVoto(alternativaSeleccionada.trim());
            console.log("Alternativa seleccionada", alternativaSeleccionada);
            console.log("Resultados de la encuesta: ");
            
        } else {
            console.log("Votacion cancelada");
        }
    }
};

const encuesta = new Encuesta();

encuesta.preguntas = [
    new Pregunta ("¿Cual de estas plantas prefieres para interiores?", ["Cactus", "Monstera", "Palmera", "Helecho"]),
    new Pregunta ("¿Que tamano de planta ornamental prefieres?",["Pequena", "Mediana", "Grande"]),
    new Pregunta ("¿Que tipo de mantenimiento prefieres para tus plantas?",["Frecuente", "moderado", "casi nada"]),
    new Pregunta ("¿Que te gusta mas en una planta ornamental?",["Flores", "Follaje", "Diseno"]),
    new Pregunta ("¿Donde pondrias tus plantas ornamentales?", ["Ventana", "Sala", "Cocina", "Habitacion"]),
    new Pregunta ("¿Cual crees que es el mayor beneficio de tener plantas ornamentales en casa?",["Purifican el aire", "Reducen el estres", "Decoracion", "Aportan frescura al ambiente"]),
    new Pregunta ("¿Que estilo prefieres para tus plantas ornamentales?",["Minimalista", "Tropical", "Desertico", "Clasico"]),
    new Pregunta ("¿Que planta ornamental recomendarias para principiantes?",["Suculentas", "Pothos", "Sansevieria", "Drácena"]),      
];

encuesta.ejecutar();
