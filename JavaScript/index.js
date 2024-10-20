console.log("hola mundo")

var nombre = "Juan";
console.log(nombre); // Salida: Juan

nombre = "Pedro";
console.log(nombre); // Salida: Pedro

// Inicializar el saldo de la cuenta
let saldo = 1000;

// Función para obtener la opción del usuario en base al índice
function obtenerOpcion(opciones, indiceOpcion) {
  let opcion = opciones[indiceOpcion];
  return opcion;
}

// Función principal que ejecuta el cajero automático
function cajero(opciones, saldo) {
  let indiceOpcion = 0; // Inicializar índice para recorrer las opciones
  let salir = false; // Variable de control para salir del bucle

  // Bucle que se ejecuta mientras no se decida salir
  while (!salir) {
    // Obtener la opción en base al índice
    let opcion = obtenerOpcion(opciones, indiceOpcion);
    indiceOpcion++; // Incrementar el índice para la próxima iteración

    // Evaluar la opción seleccionada
    switch (opcion) {
      case 1: // Consultar saldo
        console.log("Su saldo actual es de " + saldo + " dólares.");
        break;
      case 2: // Realizar un depósito
        let deposito = 50; // Valor de ejemplo para el depósito
        saldo += deposito; // Incrementar el saldo con el depósito
        console.log("Depósito realizado con éxito.");
        break;
      case 3: // Realizar un retiro
        let retiro = 300; // Valor de ejemplo para el retiro
        // Verificar si el retiro es posible
        if (retiro <= saldo) {
          saldo -= retiro; // Decrementar el saldo con el retiro
          console.log("Retiro realizado con éxito.");
        } else {
          console.log("Saldo insuficiente para realizar el retiro.");
        }
        break;
      case 4: // Salir
        console.log("Gracias por utilizar nuestro cajero automático.");
        salir = true; // Cambiar la variable de control para salir del bucle
        break;
      default: // Opción no válida
        console.log("Opción no válida, por favor seleccione una opción del menú.");
    }
  }

  return saldo; // Devolver el saldo final al terminar la ejecución
}

// Variables individuales para las opciones
let opcion1 = 1;
let opcion2 = 2;
let opcion3 = 50;
let opcion4 = 3;
let opcion5 = 300;
let opcion6 = 4;

// Arreglo de opciones
let opciones = [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6];

// Ejecutar el cajero automático con el arreglo de opciones y saldo inicial
let saldoFinal = cajero(opciones, saldo);

// Mostrar el saldo final
console.log("Saldo final: " + saldoFinal + " dólares.");
