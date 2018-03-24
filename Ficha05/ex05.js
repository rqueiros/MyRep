// Classe País
class Pais {
    constructor(nome, populacao, area) {
        this.nome = nome
        this.populacao = populacao
        this.area = area
    }

    // Propriedade NOME
    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }

    // Propriedade POPULACAO
    get populacao() {
        return this._populacao
    }
    set populacao(novaPopulacao) {
        this._populacao = novaPopulacao
    }

    // Propriedade AREA
    get area() {
        return this._area
    }
    set area(novaArea) {
        this._area = novaArea
    }
    


    // Método que devolve o nome do país com a maior área
    static getMaiorAreaPais() {
        let maior = 0
        let nomePais = ""        
        for(let i = 0; i < paises.length; i++) {
            if (paises[i].area > maior) {
                maior = paises[i].area
                nomePais = paises[i].nome
            }
        }
        return nomePais
    }

    // Método que devolve o nome do país com a maior população
    static getMaiorPopulacaoPais() {
        let maior = 0
        let nomePais = ""        
        for(let i = 0; i < paises.length; i++) {
            if (paises[i].populacao > maior) {
                maior = paises[i].populacao
                nomePais = paises[i].nome
            }
        }
        return nomePais
    }

     // Método que devolve o nome do país com a maior densidade populacional
     // Densidade populacional = número de pessoas / área da região
     static getMaiorDensidadePais() {
        let maior = 0
        let nomePais = ""    
        for(let i = 0; i < paises.length; i++) {
            let densidade = paises[i].populacao / paises[i].area
            if (densidade > maior) {
                maior = densidade
                nomePais = paises[i].nome
            }
        }
        return nomePais
    }

    // Método que vai comparar nomes de países e ordená-los
    static comparar(p1, p2) {
        if (p1.nome > p2.nome) {
            return 1
        } else if (p1.nome < p2.nome) {
            return -1
        } else {
            return 0
        }
    }
}


// Criação de objetos e invocação de propriedades/métodos
let meuPais = new Pais("Portugal", 10000000, 232323652)
let meuPais2 = new Pais("Espanha", 30000000, 22343652)
let meuPais3 = new Pais("Itália", 20000000, 2123452)
let meuPais4 = new Pais("Congo", 100000, 2123232)
let meuPais5 = new Pais("Timor", 230000000, 23222222)
let paises = []
paises.push(meuPais, meuPais2, meuPais3, meuPais4, meuPais5)

// Listar países
for(let i=0; i< paises.length; i++) {
    console.log(paises[i].nome)
}

// Ordenar pelo nome do país
paises.sort(Pais.comparar)

// Listar países ordenados
for(let i=0; i< paises.length; i++) {
    console.log(paises[i].nome)
}



