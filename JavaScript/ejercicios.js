function menuOpciones(params) {

    let opcion = parseFloat(prompt('Ingrese una opcion del 1 al 4'))

    if (opcion === 1) {
    console.log('Hola')
    }
    else if (opcion === 2) {
    console.log("Hoy es 23 de octubre");
    }
    else if (opcion === 3) {
    console.log('Adios!');   
    }
    else if (opcion === 4) {
    console.log('Su saldo es de 3000');
    }
else {
console.log('digite un nuevo numero');

}
}


//LLAMAR A LA FUNCION SIEMPRE PARA PODER EJECUTAR 
menuOpciones()