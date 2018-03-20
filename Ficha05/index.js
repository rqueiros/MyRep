





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


class Pais {
    constructor(nome, populacao, area) {
        this.nome = nome
        this.populacao = populacao
        this.area = area
    }


    static getMaiorPopulacaoPais() {
        let maior = paises[0].populacao
        let nomePais = paises[0].nome        
        for(let i=1; i < paises.length; i++) {
            if (paises[i].populacao > maior) {
                maior = paises[i].populacao
                nomePais = paises[i].nome
            }
        }

        return nomePais
    }


}


// Exercício 1
/*
let meuRetangulo1 = new Retangulo(4,5)
console.log(meuRetangulo1.largura)
console.log(meuRetangulo1.altura)
console.log(meuRetangulo1.getArea())
console.log(meuRetangulo1.getPerimetro())
*/
// Exercício 2
// Exercício 3
// Exercício 4

// Exercício 5
let meuPais = new Pais("Portugal", 10000000, 232323652)
let meuPais2 = new Pais("Espanha", 30000000, 22343652)
let meuPais3 = new Pais("Itália", 20000000, 2123452)
let meuPais4 = new Pais("Congo", 100000, 2123232)
let meuPais5 = new Pais("Timor", 230000000, 23222222)
let paises = []
paises.push(meuPais)
paises.push(meuPais2)
paises.push(meuPais3)
paises.push(meuPais4)
paises.push(meuPais5)

console.log(paises.length)
let nome = Pais.getMaiorPopulacaoPais()
console.log(nome)
