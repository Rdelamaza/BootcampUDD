class Vehiculo {
    constructor(marca, modelo, ano, estado) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.estado = estado;
    }

    arrancar(){
        if (this.estado === 'Detenido') {
            console.log('El auto esta encedido');
        } else if
        (this.estado === 'Encendido'){
            console.log('El vehiculo ya se encuentra encendido');
        }
    }
    detener(){
        if (this.estado === 'Encendido') {
            console.log('El auto se detuvo');
        } else if 
            (this.estado === 'Detenido'){
                console.log('El auto ya esta detenido');   
            }
        }
    }   



const miVehiculo = new Vehiculo('Ford', 'Explorer', 2024,'Encendido')

console.log(miVehiculo);

miVehiculo.arrancar();


