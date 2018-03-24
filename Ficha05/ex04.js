
// Classe Dado
class Dado {
    constructor() {
        this._faces = 6
        this.valorFace = 1                
    }

    // Propriedade valorFace (set e get)
    get valorFace() {
        return this._valorFace
    }
    set valorFace(novoValorFace) {
        if (novoValorFace > 0 && novoValorFace < this._faces) {
            this._valorFace = novoValorFace           
        } else {
            console.log("Valor inválido para a face do dado")
        }        
    }
    
    // Rolar o dado
    rolar() {
        this.valorFace = Math.round(Math.random() * (this._faces - 1) + 1)
    }    

    getQuantidadeFaces() {
        return this._faces
    }
}


// Criar 1 instância da classe Dado
let meuDado = new Dado()

// Mostrar valor atual do dado
console.log(meuDado.valorFace)

// Rolar o dado
meuDado.rolar()

// Mostrar valor atual do dado
console.log(meuDado.valorFace)


