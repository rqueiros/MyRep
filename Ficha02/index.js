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

function concat(numbers) {
    let newStr = ""
    for(let i = 0; i < numbers.length; i++) {
        newStr += numbers[i]
    }
    return newStr    
}

// Forma abreviada
function concat_2(numbers, n) {
    return numbers.reduce( (a, b) => "" + a + b)
}

/*
    ######################## Alínea E ###########################
*/
function funcE(colors) {
    let result = sort(colors)
    show("E -> " + result)
}

function sort(colors) {    
    return colors.sort()
}

/*
    ######################## Alínea F ###########################
*/
function funcF(colors) {
    let result = unsort(colors)
    show("F -> " + result)
}

function unsort(colors) {    
    return colors.sort().reverse()
}

/*
    ######################## Alínea G ###########################
*/
function funcG(colors) {
    let result = getBiggerString(colors)
    show("G -> " + result)
}

function getBiggerString(colors) {
    let bigger = 0
    let biggerString = ""
    for(let i = 0; i < colors.length; i++) {
        let nChars = colors[i].length
        if (nChars > bigger) {
            bigger = nChars
            biggerString = colors[i]
        }        
    }
    return biggerString    
}

// Forma abreviada
function getBiggerString_2(colors) {
    return colors.reduce( (a, b) => {
        return a.length > b.length ? a : b
    })
}

/*
    ######################## Alínea H ###########################
*/
function funcH(colors, str) {
    let result = getNumberOccurString(colors, str)
    show("H -> " + result)
}

function getNumberOccurString(colors, str) {
    let count = 0
    for(let i = 0; i < colors.length; i++) {        
        if (colors[i] == str) {
            count++
        }        
    }
    return count    
}

// Forma abreviada
function getNumberOccurString_2(colors, str) {
   return colors.filter( (a) => { 
       return a == str; 
    }).length;
}

/*
    ######################## Alínea I ###########################
*/
function funcI(passwords) {
    let result = confirmPass(passwords)
    show("I -> " + result)
}

function confirmPass(passwords) {
   let result = 0
   if(passwords[0]==passwords[1]) {
       result = 1
   }
   return result 
}

// Forma abreviada
function confirmPass_2(passwords) {    
    return passwords[0]==passwords[1] ? 1 : 0    
}

/*
    ######################## Alínea J ###########################
*/
function funcJ(colors, pos) {
    let result = getValueFromPosition(colors, pos)
    show("J -> " + result)
}

function getValueFromPosition(colors, pos) {   
   return colors[pos]
}

/*
    ######################## Alínea K ###########################
*/
function funcK(num) {
    let result = createArray(num)
    show("k -> " + result)
}

function createArray(num) {   
    let nums = [] 
    for(let i = 1; i < num; i++) {
        nums[i - 1] = i
    }
   return nums
}

/*
    ######################## Alínea L ###########################
*/
function funcL(numbers) {
    let result = getEvenNumbers(numbers)
    show("L -> " + result)
}

function getEvenNumbers(numbers) {   
    let newArray = [] 
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0) {
            newArray.push(numbers[i])
        }
    }
   return newArray
}

// Forma abreviada
function getEvenNumbers_2(numbers) {   
    return numbers.filter(n => n % 2 == 0)
}