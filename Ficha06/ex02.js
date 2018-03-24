window.onload = function() {
    init()    
}


function init() {
    // Obtenção das referências para os elementos HTML    
    let btnTodas = document.getElementById("btnTodas")
    let btnCampus1 = document.getElementById("btnCampus1")
    let btnCampus2 = document.getElementById("btnCampus2")
    let btnCampus3 = document.getElementById("btnCampus3")

    // Clique no botão TODAS
    btnTodas.addEventListener("click", function () {
        // Obtém referência para a coleção de todos os elementos input
        let refInputs = document.getElementsByTagName("input")
        // Itera sobre todos os elementos input e coloca o seu fundo a verde
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "green"            
        }
    })
 
    // Clique no botão CAMPUS I
    btnCampus1.addEventListener("click", function () {
        // Obtém referência para a coleção de todos os elementos input
        let refInputs = document.getElementsByClassName("campus1")
        // Itera sobre todos os elementos input e coloca o seu fundo a verde
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "green"            
        }
    })

    // Clique no botão TODAS
    btnCampus2.addEventListener("click", function () {
        // Obtém referência para a coleção de todos os elementos input
        let refInputs = document.getElementsByClassName("campus2")
        // Itera sobre todos os elementos input e coloca o seu fundo a verde
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "green"            
        }
    })

    // Clique no botão TODAS
    btnCampus3.addEventListener("click", function () {
        // Obtém referência para a coleção de todos os elementos input
        let refInputs = document.getElementsByClassName("campus3")
        // Itera sobre todos os elementos input e coloca o seu fundo a verde
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "green"            
        }
    })
    
}
