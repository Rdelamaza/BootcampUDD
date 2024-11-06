const libros = [];

// funcion de aclaracion
function agregar (titulo, autor, ano){
    libros.push({
        titulo, autor, ano
    });
    console.info('libro agregado');
}
      

 // funcion de expresion
const eliminar = function(titulo) {
  const index = libros.findIndex((libros)=> libros.titulo === titulo);  
  if (index >= 0){
    libros.splice(index, 1);
    console.info('libro eliminado');
  } else {
    console.error('libro no existe');
  }
 }   

const buscar = function(titulo){
    const result = libros.find((libro) => libro.titulo === titulo )
    if (result == undefined) {
        console.info('libro no encontrado')
    }
};

const mostrar  = ()  => {
    libros.map((libro) => console.log(libro));
}




agregar("principito", 'Vargas', 2020);
agregar('bjj', 'rdlm', 2024);
agregar('programacion', 'brian', 2025);



console.table(libros);

buscar('bjj');

eliminar('bjj');
console.log(libros);

