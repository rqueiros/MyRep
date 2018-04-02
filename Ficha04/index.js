/*
    Variável global que referencia uma função anónima reponsável por apresentar um determinado valor na TextArea
*/
let show = function (value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}


// ##################### Alínea A ####################
let student = {
    name: "David Silva",
    course: "POO",
    grade: 12,
    toString: function () {
        return this.name + "#" + this.course + "#" + this.grade
    }
}

// Função para listar os nomes das propriedades do objeto
function funcA() {
    let str = ""
    for (let key in student) {
        str += key
    }
    show("Listagem-> " + str)

    // ii) remover propriedade
    delete student.grade
    
    // listar de novo o objeto
    str = ""
    for (let key in student) {
        str += key
    }
    show("Listagem-> " + str)

    // iii) calcular tamanho do objeto (nç de propriedades)
    let cont = 0
    for (let key in student) {
        cont++
    }
    show("Nº de propriedades-> " + cont)
}


// ##################### Alínea B ####################
let grades = [
    {
        name: 'Rui',
        grade: 8
    },
    {
        name: 'Ana',
        grade: 12
    },
    {
        name: 'Carla',
        grade: 14
    }]


// Função para retornar o tamanho de um objeto (nº de propriedades)
function funcB() {
    
    // i) inserir novo estudante/nota
    let myName = prompt("Digite um nome?")
    let myGrade = parseInt(prompt("Digite uma nota?"))

    // Criar objeto
    let grade = {name: myName, grade: myGrade}
    
    // Adicionar objeto ao array
    grades.push(grade)
    
    // ii) calcular média das notas
    let total = 0
    for(let i=0; i < grades.length; i++) {
        total += grades[i].grade
    }
    // Imprimir a média das notas na TextArea
    show("Média-> " + total/grades.length)
    
    // iii) Obter todos os nomes dos estudantes com nota igual ou superior a 10
    let str = ""
    for(let i=0; i < grades.length; i++) {
        if (grades[i].grade >= 10) {
            str += grades[i].name + "\n"
        }       
    }
    // Imprimir o nome dos estudantes com positiva na TextArea
    show("Positivas-> " + str)
}



// ##################### Alínea C ####################
let carros = []
// Em vez de criar uma função construtora optei por criar uma classe para facilitar legibilidade
class Carro {
    constructor(marca, matricula, cor, depositoAtual, tipoCombustivel) {
        this.marca = marca
        this.matricula = matricula
        this.cor = cor
        this.depositoAtual = depositoAtual
        this.tipoCombustivel = tipoCombustivel
    }

    get marca() {
        return this._marca
    }

    set marca(novaMarca) {
        this._marca = novaMarca
    }

    get cor() {
        return this._cor
    }

    set cor(novaCor) {
        this._cor = novaCor
    }

    get depositoAtual() {
        return this._depositoAtual
    }

    set depositoAtual(novoDeposito) {
        if (this._depositoAtual - novoDeposito) {
            this._depositoAtual = novoDeposito
        }        
    }

    consumir(km) {
        this.depositoAtual -= km * 5 / 100
    }

}

function funcC() {
    // Criação de 2 instâncias de carro
    let meuCarro = new Carro("Ford","91-GH-15","verde", 40, "Gasóleo")
    let meuCarro2 = new Carro("Opel","23-AB-23","brano", 50, "Gasolina")

    // Adição das instâncias anteriores a um array
    carros.push(meuCarro, meuCarro2)

    // Analisar depósito do 2º carro
    show("Depósito atual-> " + meuCarro2.depositoAtual)
    meuCarro2.consumir(22)
    show("Depósito atual-> " + meuCarro2.depositoAtual)
    meuCarro2.consumir(122)
    show("Depósito atual-> " + meuCarro2.depositoAtual)
}

// ##################### Alínea D ####################
class Cilindro {
    constructor(raio, altura) {
        this.raio = raio
        this.altura = altura        
    }

    get raio() {
        return this._raio
    }

    set raio(novoRaio) {
        this._raio = novoRaio
    }

    get altura() {
        return this._altura
    }

    set altura(novaAltura) {
        this._altura = novaAltura
    }


    volume() {
        return Math.PI * this.raio * this.raio * this.altura
    }
}

function funcD() {
    let cyl = new Cilindro(7, 4)
    show("Volume: "  + cyl.volume().toFixed(4))    
}


// ##################### Alínea E ####################
function funcE() {    
    show("Exercício similar a um da próxima ficha (ver o da outra ficha)")    
}

// ##################### Alínea F ####################
function funcF() {    
    String.prototype.initEnd = function () {          
      return this[0] + this[this.length - 1]
    }
    
    let str = "ESMAD"
    
    show("INITEND-> " + str.initEnd())    
}

