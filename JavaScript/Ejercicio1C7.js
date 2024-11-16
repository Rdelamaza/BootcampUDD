class Animal {
    constructor(color, familia) {
        this.color = color;
        this.familia = familia;

        
    }
}

class Perro extends Animal {
    constructor(color, familia, raza) {
        super(color, familia);
        this.raza = raza;
    }
    describir() {
        return `Mi perro es de la familia ${this.familia}, su raza es ${this.raza}, es de color ${this.color} y cuando se enoja hace WOW`;
    }

    ladrar(){
        return `Guau Guau`;
    }
    }



const miPerro= new Perro('gris', 'Cannis', 'akita');

console.log (miPerro.describir());

