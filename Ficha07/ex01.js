// Evento executado quando a página HTML for carregada e a árvore DOM estar disponível
window.onload = function() {

    // Obter referências para os elementos do formulário
    let frmLogin = document.getElementById("frmLogin")
    let txtEmail = document.getElementById("txtEmail")
    let txtPass = document.getElementById("txtPass")
    
    // Adicionar listener ao botão submit
    frmLogin.addEventListener("submit", function (event) {
        // Neste caso não se faz nenhuma validação extra, pois as mesmas são feitas internamente pelos próprios elementos do HTML5 (required, min|maxLength, email)
        
        // Escrever na consola os dados do formulário
        console.log(txtPass.value + "#" + txtEmail.value)
        
        // O parâmetro event pode ser usado (opcionalmente) para parar o form de ser submetido com o método preventDefault()
        // Previne do form não ser submetido (isso faria com que a página fizesse um refresh)
        event.preventDefault()
    })

     // Adicionar listener ao botão reset
     frmLogin.addEventListener("reset", function () {        
        txtEmail.focus()
    })
}