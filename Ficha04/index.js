/*
    Variável global que referencia uma função anónima reponsável por apresentar um determinado valor na TextArea
*/
let show = function (value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}


/*
    Variáveis globais com objetos
*/
let student = {
    name: "David Silva",
    course: "POO",
    grade: 12,
    toString: function () {
        return this.name + "#" + this.course + "#" + this.grade
    }
}

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

// Função para listar os nomes das propriedades do objeto
function funcA() {
    let str = ""
    for (let key in student) {
        str += key
    }
    show("A-> " + str)
}

// Função para listar os nomes das propriedades do objeto, remover propriedade e listar novamente
function funcB() {
    funcA()
    delete student.grade
    funcA()
}

// Função para retornar o tamanho de um objeto (nº de propriedades)
function funcC() {
    let cont = 0
    for (let key in student) {
        cont++
    }
    show("C-> " + cont)
}

// Função para retornar o tamanho de um objeto (nº de propriedades)
function funcD() {
    
    // Obter dados do utilizador
    let myName = prompt("Digite um nome?")
    let myGrade = parseInt(prompt("Digite uma nota?"))

    // Criar objeto
    let grade = {name: myName, grade: myGrade}
    
    // Adicionar objeto ao array
    grades.push(grade)

    // Listar objetos
    let str = ""
    for(let i=0; i<grades.length; i++) {
        str += grades[i].name + "-" + grades[i].grade + "\n"
    }

    // Imprimir na TextArea
    show("D-> " + str)
}

// Função para devolver a média das notas a POO
function funcE() {
    
    // Somar todas as notas do array
    let total = 0
    for(let i=0; i < grades.length; i++) {
        total += grades[i].grade
    }

    // Imprimir a média das notas na TextArea
    show("E-> " + total/grades.length)
}

// Função para devolver nomes dos estudantes com nota positiva a POO
function funcF() {
    
    // Obter todos os nomes dos estudantes com nota igual ou superior a 10
    let str = ""
    for(let i=0; i < grades.length; i++) {
        if (grades[i].grade >= 10) {
            str += grades[i].name + "\n"
        }       
    }

    // Imprimir a média das notas na TextArea
    show("F-> " + str)
}

let carros = []

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

    set marca(value) {
        this._marca = value
    }

}

let meuCarro = new Carro("Nissan","91-GH-15","cinza", 10, "gasóleo")
let meuCarro2 = new Carro("Seat","45-AS-52","preto", 50, "gasolina")

carros.push(meuCarro)
carros.push(meuCarro2)


function funcG() {   
    for(let i=0; i < carros.length; i++) {        
        console.log(carros[i].marca + "-" + carros[i].cor)        
    }
    
    
    meuCarro.marca = "ferrari"
    
    for(let i=0; i < carros.length; i++) {        
        console.log(carros[i].marca + "-" + carros[i].cor)        
    }

}










