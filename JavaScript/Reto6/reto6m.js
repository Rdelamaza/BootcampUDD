let catalogo = [];

// 1. Función para agregar un producto
function agregarProducto(nombre) {
    catalogo.push({ nombre: nombre, precio: false });
    console.log(`Producto "${nombre}" agregado.`);
}

// 2. Función para eliminar un producto
const eliminarProducto = function(nombre) {
    const index = catalogo.findIndex(producto => producto.nombre === nombre);
    if (index !== -1) {
        catalogo.splice(index, 1);
        console.log(`Producto "${nombre}" eliminado.`);
    } else {
        console.log(`Producto "${nombre}" no encontrado.`);
    }
};

// 3. Función para buscar un producto
const buscarProducto = function(nombre) {
    return catalogo.find(function(producto) {
        return producto.nombre === nombre;
    });
};

// 4. Función para mostrar todos los productos
const mostrarProducto = () => {
    console.log("Productos:");
    catalogo.forEach(producto => {
        console.log(`- ${producto.nombre} (${producto.precio ? "Precio establecido" : "Sin precio"})`);
    });
};

// Ejemplos de uso
agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Avena");
mostrarProducto();
eliminarProducto("Pan");
const encontrado = buscarProducto("Leche");
console.log(encontrado ? `Producto encontrado: ${encontrado.nombre}` : "Producto no encontrado");
