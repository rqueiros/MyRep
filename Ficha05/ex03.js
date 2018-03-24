// Classe Círculo
class Circulo {
    constructor(raio) {
        this.raio = raio        
    }

    // Propriedade raio (set e get)
    get raio() {
        return this._raio
    }
    set raio(novoRaio) {
        this._raio = novoRaio
    }
    
    // Método para calcular a área de um círculo
    getArea() {
        return Math.PI * Math.pow(this.raio, 2)
    }

    // Método para calcular a circunferência (perímeto) de um círculo
    getCircunferencia() {
        return 2 * Math.PI * this._raio
    }

     // Método para calcular a circunferência (perímeto) de um círculo
     aumentarRaio(pct) {
        this.raio *= 1 + (pct/100) 
    }
}


// Criação de objetos e invocação de propriedades/métodos
let raio = parseInt(prompt("Escreva um raio para um novo círculo?"))
let meuCirculo = new Circulo(raio)

console.log(meuCirculo.raio)
console.log(meuCirculo.getArea())
console.log(meuCirculo.getCircunferencia())

// Aumento do raio
let pct = parseInt(prompt("Qual a percentagem do aumento do raio (ex.: 30)?"))
meuCirculo.aumentarRaio(pct)

console.log(meuCirculo.raio)
console.log(meuCirculo.getArea())
console.log(meuCirculo.getCircunferencia())


