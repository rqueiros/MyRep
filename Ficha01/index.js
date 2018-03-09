
// Alínea A
function funcA() {
    console.log("Olá Mundo!")
}

// Alínea B 
function funcB() {    
    let name="Ricardo"
    console.log("Olá, " + name + "!")    
}

// Alínea B 
function funcB_2() {    
    let f = function(name) {console.log("Olá, " + name + "!")}
    f("Ricardo")
}

// Alínea C
function funcC() {    
    let a = 12; let b = 3
    let comprimento = a * b
    console.log("Comprimento: " + comprimento)    
}

// Alínea D 
function funcD() {    
    let n1 = parseInt(prompt("Escreva o 1ª número?"))
    let n2 = parseInt(prompt("Escreva o 2ª número?"))    
    let oper = prompt("Escreva o operador?")
    let result

    switch (oper) {
        case "+": result = n1 + n2; break
        case "-": result = n1 - n2; break
        case "*": result = n1 * n2; break
        case "/": 
            if(n2==0) {
                console.log("O segundo operando não pode ser 0")
            }                
            else {
                result = n1 / n2
            }
            break
                
        default: console.log("Operador inválido"); break
    }

    if (result!=undefined) {
        console.log("Resultado: " + result)
    }
}

// Alínea E 
function funcE() {    
    let altura = parseFloat(prompt("Altura?"))
    let peso = parseFloat(prompt("Peso?"))    
    let result =  peso / (altura * altura)
    
    if (result < 18.5) {
        console.log("Abaixo do peso")
    } else if (result < 24.9) {
        console.log("Peso normal")
    } else if (result < 29.9) {
        console.log("Sobrepeso")
    } else if (result < 34.9) {
        console.log("Obesidade grau I")
    } else if (result < 39.9) {
        console.log("Obesidade grau II")
    } else {
        console.log("Obesidade grau III")  
    }
}

// Alínea F 
function funcF() {    
    let str = prompt("Escreva uma palavra?")
    let n = parseInt(prompt("Escreva o nº de vezes que quer imprimir a palavra?"))    
    
    var f = function(str,n) {
        for (let i = 0; i < n; i++) {
            console.log(str)
        }            
    }

    f(str,n)
}

// Alínea G 
function funcG() {    
    let n1 = parseInt(prompt("Escreva o 1º número?"))
    let n2 = parseInt(prompt("Escreva o 2º número?"))
    
    for (let i=n1; i<n2;i++) {
        console.log(i)
    }
}

// Alínea H 
function funcH() {    
    let num = parseInt(prompt("Escreva o número para calcular a tabuada?"))
    
    for(let i =1; i<=10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

// Alínea I 
function funcI() {    
    let n1 = parseInt(prompt("Escreva o 1º número?"))
    let n2 = parseInt(prompt("Escreva o 2º número?"))
    let result
    for (let i=n1; i<=n2;i++) {
        if(i % 3 == 0) {
            result = result + i
        }        
    }
    console.log("Resultado da soma dos múltiplos de 3: " + result)
}

// Alínea J 
function funcJ() {    
    let n = parseInt(prompt("Escreva um número"))
    let primo = true
    for (let i = 2; i < n; i++) {
        if(n % i == 0) {
            primo = false
        }        
    }    
    let result = primo ? "SIM" : "NÃO"
    console.log(result)
}

// Alínea K 
function funcK() {    
    let n = parseInt(prompt("Escreva um número"))
    let fact = 1    
    for (let i = n; i >= 1; i--) {
        fact = fact * i
    }                
    console.log("O fatorial é " + fact)
}

// Alínea L
function funcL() {    
    let n = parseInt(prompt("Escreva um número"))
    let total = 0
    for (let i = 1; i < n; i++) {
        if(n % i == 0) {
            total += i
        }        
    }
    let result = (total == n) ? "SIM" : "NÃO"
    console.log(result)
}

// Alínea M
function funcM() {    
    let ano = parseInt(prompt("Escreva um ano"))
    let bissexto = false
    if ( ( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0) ) { 
        bissexto = true
    }
    let result = bissexto ? "SIM" : "NÃO"
    console.log(result)
}

// Alínea N
function funcN() { 
    let num   
    num = prompt("Escreva um número")        
    if (num.charAt(0) == num.charAt(2) ) {
        console.log("SIM")
    } else {
        console.log("NÃO")
    }        
}

function funcN2() { 
    let num   
    do {
        num = parseInt(prompt("Escreva um número"))
        
        if (num>=100 && num<=999) {
            let num1 = parseInt(num % 10)
            let num2 = parseInt((num/10) % 10)
            let num3 = parseInt((num/10) / 10)
            let newNum = "" + num1 + num2 + num3            
            if (num.toString() == newNum) {
                console.log("SIM")
            } else {
                console.log("NÃO")
            }
        } else {
            console.log("Nº INVÁLIDO")
        }    
    } while (num<100 || num>999);
}

// Alínea O
function funcO() {    
    // Gerar nº aleatório entre 1 e 100
    let genNum = parseInt((Math.random() * 99) + 1)
    let attempts = 0

    do {
        num = parseInt(prompt("Escreva um número"))
        if (num > genNum) {
            console.log("PARA BAIXO!")
        } else if (num < genNum) {
            console.log("PARA BAIXO!")
        } else {            
            break
        }
        attempts++
    } while (attempts < 5);
    
    if (attempts < 5) {
        console.log("ADIVINHOU PARABÉNS!")
    } else {
        console.log("EXCEDEU O Nº DE TENTATIVAS!")
    }
    
}
