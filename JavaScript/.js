let op;

do {
    op = prompt('ingresa una opcion: suma, resta, multiplicacion, division');
    let num1;
    let num2;

    if (op !== "salir") {
        num1 = parseFloat(prompt('Ingresa el num1'));
        num2 = parseFloat(prompt('Ingresa el num2'));     
    }
    let resultado;

    switch (op) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num1 / num2; 
            break;
        case "salir":
            console.log(" Adios!");
            break;
        default:
            console.log("No ingresaste un opcion correcta");
            break;
    }

    if(op !== "salir"){
        console.log('El resultado es: ', resultado);
    }

} while(op != "salir")


