window.onload = function () {

    // Associar a data atual ao atributo max do elemento da data de nascimento
    let txtData = document.getElementById("txtData")
    txtData.setAttribute("max", formatDate(new Date()))

   

    // Adicionar listener ao formulário
    let frmRunning = document.getElementById("frmRunning")
    frmRunning.addEventListener("submit", function(event) {
        // Criação de variáveis
        let isValidate = true
        let msg = ""

        // 1. Verificar se o campo password é igual ao campo confirmar password
        let txtPass1 = document.getElementById("txtPass1")
        let txtPass2 = document.getElementById("txtPass2")
        if (txtPass1.value != txtPass2.value) {
            isValidate = false
            msg = "Os campos password e confirmar password têm de ser iguais!\n"
        }


        // ABORDAGEM 2
        // 2. Verificar se a data selecionada não é superior à data atual
        // Date.parse() recebe uma data e converte para milissegundos (desde 1 de janeiro de 1970 até a essa data)
        /*        
        let dataNasc = Date.parse(txtData.value)
        let dataAtual = Date.parse(Date())
        if(dataNasc > dataAtual) {
            isValidate = false
            msg += "A data de nascimento tem de ser inferior à data atual!\n"            
        }
        */


        // Submissão final
        if (isValidate) {
            alert("REGISTO EFETUADO COM SUCESSO");       
        } else {
            alert("ERRO: " + msg);
            event.preventDefault()
        }
        
           
    })
}


// Função que converte uma data
// Acrescentando zeros à esquerda sempre que o mês e o dia sejam inferiores a 10
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}