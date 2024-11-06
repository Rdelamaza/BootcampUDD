let catalogo = [];

//1 funcion declaracion agregar producto

function agregarProducto(nombre, precio) {
    catalogo.push({ nombre: nombre, precio: precio });
    console.log(`producto "${nombre}" agregado con precio $${precio}.`);
  }
//2 expresion eliminar producto

const eliminarProducto = function(nombre) {
     const index = catalogo.findIndex(producto => producto.nombre === nombre);
     if (index != -1){
            catalogo.splice(index,1);
            console.log(`producto"${nombre}" eliminado.`);
     } else {
            console.log(`producto "${nombre}" no encontrado.`);
            
     };
    }
  
   //3 funcion anonima buscar producto

const buscarProducto = function(nombre) {
    return catalogo.find(function(producto) {
        return producto.nombre === nombre;
    });
};

//4 Funcion flecha para mostrar productos

const mostrarProducto = () => {
        console.log("Productos en el catalogo");
        catalogo.forEach(producto =>{
            console.log(`- ${producto.nombre}: $${producto.precio}`);
            
        })
        
    }         
    

agregarProducto("pan",1000);
agregarProducto("leche", 1500);
agregarProducto("avena", 2000);

mostrarProducto();

eliminarProducto("leche");
mostrarProducto();

// muestra disponibilidad de producto
console.log(buscarProducto("pan"));
