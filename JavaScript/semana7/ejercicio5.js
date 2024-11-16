class Producto {
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

class Episodio {
    constructor(nombre, visto){
        this.nombre=nombre;
        this.visto=visto;
    }
}
class Temporada {
    constructor(numero, episodios){
        this.numero=numero;
        this.episodios=episodios;
    }
}

class Serie extends Producto{
    constructor(nombre, precio,stock, temporadas){
        super(nombre, precio, stock)
        this.temporadas=temporadas;
        
        }
    verEpisodio(temporada, episodio){
        this.temporadas[temporada-1].episodios[episodio-1].visto = true;
    }    
    episodioPorVer(){
        let coutSinVer = 0;
        this.temporadas.forEach(temporada => {
            temporada.episodios.forEach((episodio)=>{
                console.log(episodio.nombre);

                if(!episodio.visto){
                    coutSinVer++;
                }
                
            })
            
        });
        return coutSinVer;

    }
    vender(cantidad){
        super.vender(cantidad);
        console.log(`Episodios pendientes de ver: ${this.episodioPorVer()}`);
    }
    }


const house0101 = new Episodio('Capitulo 1-1', false);
const house0102 = new Episodio('Capitulo 1-2', false);
const house0103 = new Episodio('Capitulo 1-3', false);
const house01 = new Temporada(1, [house0101, house0102, house0103]);

const house0201 = new Episodio('Capitulo 2-1', false);
const house0202 = new Episodio('Capitulo 2-2', false);
const house0203 = new Episodio('Capitulo 2-3', false);
const house0204 = new Episodio('Capitulo 2-4', false);
const house02 = new Temporada(2, [house0201, house0202, house0203, house0204]);

const house = new Serie('House', 1000,10,[house01, house02]);

console.log(house);

console.log(house.episodioPorVer());

house.verEpisodio(1, 2);

console.log(house);

console.log(house.episodioPorVer());

house.vender(9);

console.log(house);

