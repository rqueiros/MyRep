window.onload = function() {
    init()    
}


function init() {
    // Obtenção das referências para os elementos HTML    
    let myP = document.getElementById("myP")
    let myTxt = document.getElementById("myTxt")
    let myBtn = document.getElementById("myBtn")
    
    // Alteração do texto do elemento parágrafo
    myP.innerHTML = "Bem-vindo à minha página!"

    // Clique no botão    
    myBtn.addEventListener("click", function() {
        // Se a caixa de texto estiver vazia: adiciona no parágrafo o texto que está na caixa de texto                
        if (myTxt.value != "") {
            myP.innerHTML = "Bem-vindo, " + myTxt.value + "!"            
        // Se a caixa de texto não estiver vazia: adiciona no parágrafo o texto original                
        } else {
            myP.innerHTML = "Bem-vindo à minha página!"            
        }
    })
}

