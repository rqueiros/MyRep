
const VELOCIDADE = {
    BAIXA: 1,
    MEDIA: 2,
    ALTA: 3
}

// Classe Ventoinha
class Ventoinha {
    constructor(raio) {
        this.velocidade = VELOCIDADE.BAIXA
        this.ligada = false                
    }

    // Propriedade velocidade (set e get)
    get velocidade() {
        return this._velocidade
    }
    set velocidade(novaVelocidade) {
        this._velocidade = novaVelocidade
    }

    // Propriedade ligada (set e get)
    get ligada() {
        return this._ligada
    }
    set ligada(novaLigada) {
        this._ligada = novaLigada
    }

    toString() {
        if(this.ligada)
            return `A ventoinha está ligada com a velocidade ${this.velocidade}` 
        else
            return "A ventoinha está desligada"
    }    
}


// Criar 2 instância da classe Ventoinha
let minhaVentoinha1 = new Ventoinha()
let minhaVentoinha2 = new Ventoinha()

// Mostrar dados da 1ª ventoinha
console.log(minhaVentoinha1.toString())

// Ligar e aumentar a velocidade da segunda ventoinha
minhaVentoinha2.ligada = true
minhaVentoinha2.velocidade = VELOCIDADE.ALTA

// Mostrar dados da 2ª ventoinha
console.log(minhaVentoinha2.toString())


