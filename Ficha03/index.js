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
function funcA(str) {
    show("A -> " + str.length)    
}

/*
    ######################## Alínea B ###########################
*/
function funcB(nome, apelido) {
    show("B -> " + apelido.toUpperCase() + ", " + nome.toUpperCase())    
}

/*
    ######################## Alínea C ###########################
*/
function funcC(str) {
    let count = 0
    for (var i = 0; i < str.length; i++) {    
        let c = str[i].toLowerCase()
        if(c=="a" || c=="e" || c=="i" || c=="o" || c=="u") {
            count ++
        }
    }
    show("C -> " + count)    
}

/*
    ######################## Alínea D ###########################
*/
function funcD(str) {
    show("D -> " + str.split(" ").length)    
}
