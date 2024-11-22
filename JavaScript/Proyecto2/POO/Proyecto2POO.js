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
    new Pregunta ("¿Cual de estas plantas prefieres para interiores?", ["cactus", "monstera", "palmera", "helecho"]),
    new Pregunta ("¿Que tamano de planta ornamental prefieres?",["pequena", "mediana", "grande"]),
    new Pregunta ("¿Que tipo de mantenimiento prefieres para tus plantas?",["frecuente", "moderado", "casi nada"]),
    new Pregunta ("¿Que te gusta mas en una planta ornamental?",["flores", "follaje", "diseno"]),
    new Pregunta ("¿Donde pondrias tus plantas ornamentales?", ["ventana", "sala", "cocina", "habitacion"]),
    new Pregunta ("¿Cual crees que es el mayor beneficio de tener plantas ornamentales en casa?",["purifican el aire", "reducen el estres", "decoracion", "aportan frescura al ambiente"]),
    new Pregunta ("¿Que estilo prefieres para tus plantas ornamentales?",["minimalista", "tropical", "desertico", "clasico"]),
    new Pregunta ("¿Que planta ornamental recomendarias para principiantes?",["suculentas", "pothos", "sansevieria", "dracena"]),      
];

encuesta.ejecutar();
