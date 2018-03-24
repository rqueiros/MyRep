// Classe Retângulo
class Retangulo {
    constructor(largura = 1, altura = 1) {
        this.largura = largura
        this.altura = altura
        this._cor = "branco"
    }

    // Propriedade largura (set e get)
    get largura() {
        return this._largura
    }
    set largura(value) {
        this._largura = value
    }

    // Propriedade altura (set e get)
    get altura() {
        return this._altura
    }
    set altura(value) {
        this._altura = value
    }

    // Propriedade cor (set e get)
    get cor() {
        return this._cor
    }


    // Método para calcular a área de um retangulo
    getArea() {
        return this._altura * this._largura
    }

    // Método para calcular o perímetro de um retangulo
    getPerimetro() {
        return 2 * this._altura + 2 * this._largura
    }
}


// Criação de objetos e invocação de propriedades/métodos
let meuRetangulo1 = new Retangulo()
console.log(meuRetangulo1.largura)
console.log(meuRetangulo1.altura)
console.log(meuRetangulo1.cor)
console.log(meuRetangulo1.getArea())
console.log(meuRetangulo1.getPerimetro())

let meuRetangulo2 = new Retangulo(10, 5)
console.log(meuRetangulo2.largura)
console.log(meuRetangulo2.altura)
console.log(meuRetangulo2.cor)
console.log(meuRetangulo2.getArea())
console.log(meuRetangulo2.getPerimetro())


