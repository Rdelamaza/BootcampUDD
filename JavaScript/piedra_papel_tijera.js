let opciones = ['piedra', 'papel', 'tijera'];

const jugdor1 = prompt('Ingresa 0, 1 o 2')

function evaluar(op1, op2){
    if ((op1 === 0 && op2 === 1) 
        || (op1 === 1 && op2 === 2)
        || (op1 === 2 && op2 === 0)) {
        return 2;
        }
    if ((op1 === 0 && op2 === 2) 
        ||(op1 === 1 && op2 === 0)
        ||(op1 === 2 && op2 === 1)){
        return 1;
        }
   
    if (op1 === op2) {
        return 0;
    }
}

function validar(valor) {
    
        }
    
}


let ganador = evaluar(2 , 1)

console.log(ganador);








