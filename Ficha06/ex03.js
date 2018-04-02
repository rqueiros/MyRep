let filmes = []

class Filme {
    constructor(titulo, ano, genero) {
        this.id = Filme.generateId()
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

    static generateId() {
        let maior = 0
        for (let i = 0; i < filmes.length; i++) {
            if(filmes[i].id > maior) {
                maior = filmes[i].id
            }            
        }
        return maior + 1
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
    str = "<thead class='thead-dark'><tr><th>TÍTULO</th><th>ANO</th><th>GÉNERO</th><th>ACÕES</th></tr></thead><tbody>"
    for (let i = 0; i < filmes.length; i++) {
        str += "<tr>"        
        str += "<td>" + filmes[i].titulo + "</td>"
        str += "<td>" + filmes[i].ano + "</td>"
        str += "<td>" + filmes[i].genero + "</td>"
        str += "<td><a class='remove'><i class='fas fa-trash-alt'></i></a></td>"
        str +="</tr>"
    }
    str += "<tbody>"
    tblFilmes.innerHTML = str

    // Obtem todos os <td> da tabela (coluna com o ícone de remoção)
    let tdRemove = document.getElementsByClassName("remove")
    // Para cada um deles adiciona um listener para o evento clique
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function() {
            // Ao clicar num determinado filme, remove-o do array
            filmes.splice(i, 1)
            // Atualiza de novo a tabela
            atualizaTabela()
        })        
    }
}


