window.onload = function() {
    init()    
}


function init() {
    // Alteração inciial do texto do parágrafo
    let myP = document.getElementById("myP")
    myP.innerHTML = "Bem-vindo à minha página!"

    // Clique no botão
    let myBtn = document.getElementById("myBtn")
    myBtn.addEventListener("click", function() {
        let myTxt = document.getElementById("myTxt")        
        console.log(myTxt.value)
        if (myTxt.value != "") {
            myP.innerHTML = "Bem-vindo, " + myTxt.value + "!"            
        } else {
            myP.innerHTML = "Bem-vindo à minha página!"            
        }
    })
}

