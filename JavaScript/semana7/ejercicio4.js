class producto {
    constructor(nombre, stock, ano) {
        this.nombre = nombre;
        this.stock = stock;
        this.ano = ano;
    }

}

class libro  extends producto{
    constructor(nombre, stock, ano, autor) {
        super(nombre, stock, ano)
        this.autor = autor;
    }
resumen (){
    return `${this.nombre} escrito por ${this.autor} del ano ${this.ano}.`;
    
}
}

const miLibro = new libro('principito', 10, 2020, 'ggm');

console.log(miLibro.resumen());
