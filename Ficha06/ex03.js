let filmes = []

class Filme {
    constructor(titulo, ano, genero) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
    }

    // Propriedade TITULO
    get titulo() {
        return this._titulo
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo
    }

    // Propriedade ANO
    get ano() {
        return this._ano
    }

    set ano(novoAno) {
        this._ano = novoAno
    }

    // Propriedade GENERO
    get genero() {
        return this._genero
    }

    set genero(novoGenero) {
        this._genero = novoGenero
    }
}

// Evento executado quando a página HTML for carregada e a árvore DOM estar disponível
window.onload = function() {

    // Obter referências para os elementos do formulário
    let frmFilmes = document.getElementById("frmFilmes")
    let txtTitulo = document.getElementById("txtTitulo")
    let txtAno = document.getElementById("txtAno")
    let sltGenero = document.getElementById("sltGenero")
    
    // Adicionar listener ao botão submit
    frmFilmes.addEventListener("submit", function (event) {
        // Fazer aqui as validações extra
        // Neste caso não se faz nenhuma validação, pois as mesmas são feitas internamente pelos próprios elementos do HTML5
        // O parâmetro event pode ser usado para parar o form de ser submetido com o método preventDefault()

        // Criar nova instância filme com os dados do formulário
        let novoFilme = new Filme(txtTitulo.value, txtAno.value, sltGenero.value)

        // Adicionar a instância ao array de filmes
        filmes.push(novoFilme)

        // Atualiza a tabela com os dados de todos os filmes
        atualizaTabela()

        // Previne do form não ser submetido (isso faria com que a página fizesse um refresh)
        event.preventDefault()
    })
}

// Função que atualiza a tabela com os dados de todos os filmes no array
function atualizaTabela() {
    let tblFilmes = document.getElementById("tblFilmes")
    let str = ""
    str = "<tr><th>TÍTULO</th><th>ANO</th><th>GÉNERO</th></tr>"
    for (let i = 0; i < filmes.length; i++) {
        str += "<tr>"        
        str += "<td>" + filmes[i].titulo + "</td>"
        str += "<td>" + filmes[i].ano + "</td>"
        str += "<td>" + filmes[i].genero + "</td>"
        str +="</tr>"
    }
    tblFilmes.innerHTML = str
}

