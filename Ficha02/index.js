/*
    Variável global que referencia uma função anónima reponsável por apresentar um determinado valor na TextArea
*/
let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}



/*
    ######################## Alínea A ###########################
*/
function funcA(numbers) {
    let result = getAverage(numbers)
    show("A -> " + result)
}

function getAverage(numbers) {
    let total = 0
    for(let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    let average = total / numbers.length
    return(average)    
}

// Forma abreviada
function getAverage_2(numbers) {
    return numbers.reduce( (a, b) => a + b) / numbers.length
}

/*
    ######################## Alínea B ###########################
*/
function funcB(numbers) {
    let result = getSmaller(numbers)
    show("B -> " + result)
}

function getSmaller(numbers) {
    let smaller = numbers[0]
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < smaller) {
            smaller = numbers[i]
        }
    }
    return(smaller)    
}

// Forma abreviada
function getSmaller_2(numbers) {
    return numbers.reduce( (a, b) => Math.min(a , b))    
}

/*
    ######################## Alínea C ###########################
*/
function funcC(numbers, n) {
    let result = removeNumber(numbers, n)
    show("C -> " + result)
}

function removeNumber(numbers, n) {
    let newArray = []
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] != n) {
            newArray.push(numbers[i])
        }
    }
    return newArray    
}

// Forma abreviada
function removeNumber_2(numbers, n) {
    return numbers.filter( elem => elem != n)
}

/*
    ######################## Alínea D ###########################
*/
function funcD(numbers) {
    let result = concat(numbers)
    show("D -> " + result)
}

function concat_2(numbers) {
    let newStr = ""
    for(let i = 0; i < numbers.length; i++) {
        newStr += numbers[i]
    }
    return newStr    
}

// Forma abreviada
function concat(numbers, n) {
    return numbers.reduce( (a, b) => "" + a + b)
}