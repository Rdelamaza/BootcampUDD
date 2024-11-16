class producto {
    constructor(nombre, precio, stock) {
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }

    vender(cantidad){
    if (this.stock >= cantidad){
        this.stock -= cantidad;
        console.log('se ha relizado una venta y se ajusto el stock')
    } else {
        console.log('No hay stock suficiente');
        
    }
    }
}
const mermelada = new producto ('mermelada', 2500, 10);
mermelada.vender()