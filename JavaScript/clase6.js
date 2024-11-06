let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let correo = prompt("Ingresa tu correo");
let ocupacion = prompt("Ingresa tu ocupacion");
let edad = parseInt(prompt("Ingresa tu edad"));

const usuario = crearUsuario(nombre, apellido, correo, ocupacion, edad)

console.table(usuario);

function crearUsuario(nombre, apellido, correo, ocupacion, edad){
        return {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            ocupacion: ocupacion,
            edad: edad,

        }

}