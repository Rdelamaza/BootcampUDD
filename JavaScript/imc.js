function calcularIMC(){
let peso;
let altura;

peso = parseFloat(prompt("Ingrese su peso en kg"))
altura = parseFloat(prompt("Ingrese su altura en metros"))

let IMC = peso / (altura * altura)
console.log('Tu IMC es de ${IMC}')

if (IMC < 18.5) {
console.log('Estas bajo peso')
} else if (IMC>= 18.5 && IMC <= 24.9){
    console.log('Estas en peso normal')
}else if (IMC >= 25 && IMC<= 29.9){
    console.log('Estas con sobrepeso')
} else{
    console.log('Estas con obesidad')
}
}
calcularIMC()

