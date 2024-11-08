class Libro { 
    constructor(titulo, autor, ano, disponibilidad, edadMinima){
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.disponibilidad = disponibilidad;
    this.edadMinima = edadMinima;
    }
  }
  
class Biblioteca {
    constructor(){
       this.libros =[];// arreglo vacio que contendra los libros agregados
       this.librosInfantil =[];// areglo libros infantiles
    }

    agregar (titulo, autor, ano, disponibilidad, edadMinima) {
        if (edadMinima <= 15) {
        const libroInfantil = new LibroInfantil(titulo, autor, ano, disponibilidad, edadMinima);
        this.librosInfantil.push(libroInfantil);
        console.info('libro infantil agregado' , libroInfantil);
        } else{
                const libro = new Libro(titulo, autor, ano, disponibilidad, edadMinima);
                this.libros.push(libro);
                console.info('libro agregado' , libro);
            }
        }
    
    buscar(titulo){
        const result = this.libros.find((libro) => libro.titulo === titulo ) || this.librosInfantil.find((libro) =>libro.titulo === titulo);

        if (result == undefined) {
            console.info('libro no encontrado')
        } else {
            console.info('Libro encontrado')
        }
        };   

    prestamo(titulo){
        const result = this.libros.find((libro) => libro.titulo === titulo) || this.librosInfantil.find((libro) =>libro.titulo === titulo);

        if (result === undefined ) {
                console.log('no hay libros disponibles');
        } else if(result.disponibilidad > 0) {
            result.disponibilidad -= 1;
                console.log('Prestamo de una unidad realizado');

        } else {
            console.log('Libro no disponible para prestamo');
            
        }
         }
            
            
    };




  class LibroInfantil extends Libro {
        constructor(titulo, autor, ano, edadMinima, disponibilidad){
            super(titulo, autor, ano, disponibilidad, edadMinima);    
    }};

  
  
  
  
  // Crea una instancia de Biblioteca y añade algunos libros

const biblioteca = new Biblioteca();

biblioteca.agregar('cien anos de soledad', 'ggm', 1967, 10, 18)
biblioteca.buscar('cien anos de soledad');

biblioteca.prestamo('cien anos de soledad');
biblioteca.agregar('Principito', 'Antoine', 1943, 5, 13);
biblioteca.buscar('Principito');

console.table(biblioteca.libros);
console.table(biblioteca.librosInfantil);



