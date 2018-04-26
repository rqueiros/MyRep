let users = []
let userId = 0

class User {

 constructor(name, email, password) {
    this._id = User.getLastId() + 1
    this.name = name
    this.email = email
    this.password = password
 }

 // Propriedade ID
 get id() {
 return this._id
 }

 // Propriedade NAME
 get name() {
 return this._name
 }

 set name(newName) {
 this._name = newName
 }

 // Propriedade EMAIL
 get email() {
 return this._email
 }

 set email(newEmail) {
 this._email = newEmail
 }

 // Propriedade PASSWORD
 get password() {
 return this._password
 }

 set password(newPassoword) {
 this._password = newPassoword
 }

 static getLastId() {
 let lastId = 0
 if(users.length != 0) {
 lastId = users[users.length-1].id
 }
 return lastId
 }

}

// ######################################################################
// Classe Trip
// ######################################################################
let trips = []

class Trip {
    constructor(name, country, link, date, description, score, userId) {
        this._id = Trip.getLastId() + 1
        this.name = name
        this.country = country
        this.link = link
        this.date = date
        this.description = description
        this.score = score
        this.userId = userId
    }

    // Propriedade ID
    get id() {
        return this._id
    }
   
    // Propriedade NAME
    get name() {
        return this._name
    }
   
    set name(newName) {
        this._name = newName
    }

    // Propriedade COUNTRY
    get country() {
        return this._country
    }
   
    set country(newCountry) {
        this._country = newCountry
    }

    // Propriedade LINK
    get link() {
        return this._link
    }
   
    set link(newLink) {
        this._link = newLink
    }

    // Propriedade DATE
    get date() {
        return this._date
    }
   
    set date(newDate) {
        this._date = newDate
    }

    // Propriedade DESCRIPTION
    get description() {
        return this._description
    }
   
    set description(newDescription) {
        this._description = newDescription
    }

    // Propriedade SCORE
    get score() {
        return this._score
    }
   
    set score(newScore) {
        this._score = newScore
    }

    // Propriedade USERID
    get userId() {
        return this._userId
    }
   
    set userId(newUserId) {
        this._userId = newUserId
    }

    static getLastId() {
        let lastId = 0
        if(trips.length != 0) {
            lastId = trips[trips.length-1].id
        }
        console.log("IDE: " + lastId)
        return lastId
        }
}



window.onload = function() {
 // Referências para elementos HTML
 let optLogin = document.getElementById("optLogin")
 let optLogout = document.getElementById("optLogout")
 let optHi = document.getElementById("optHi")
 let optRegister = document.getElementById("optRegister")

 // Injetar utilizadores e viagens via código
 let user01 = new User("ric", "ric@mail.pt", 12345)
 users.push(user01);
 let user02 = new User("Maria", "maria@mail.pt", 54321)
 users.push(user02)

 let newTrip01 = new Trip("Madrid", "Espanha", "https://d1bvpoagx8hqbg.cloudfront.net/originals/a-experiencia-erasmus-madrid-espanha-nicole-0bb510ae0224754eb7e6c89ab9699a28.jpg", "22-04-2018", "Madrid é muito bonita", 8, 1)
 trips.push(newTrip01);
 let newTrip02 = new Trip("Roma", "Itália", "https://dicasroteirosviagens.com/wp-content/uploads/2016/07/Roma-00.jpg", "12-03-2018", "Roma é muito barulhenta", 6, 1)
 trips.push(newTrip02);
 let newTrip03 = new Trip("Nova York", "EUA", "https://3.bp.blogspot.com/-ainnr22XULU/U10OVY7InyI/AAAAAAAAVTQ/TihQRWqS3SA/s1600/Times-Square-Nova-Iorque.jpg", "22-04-2017", "NY é muito grande", 4, 2)
 trips.push(newTrip03);
 let newTrip04 = new Trip("Cairo", "Egipto", "https://cache-graphicslib.viator.com/graphicslib/page-images/360x240/278261_Viator_Shutterstock_167567.jpg", "22-04-2002", "Cairo é muito interessante", 9, 2)
trips.push(newTrip04)

 renderAuthors()
 renderCountries()
 renderCatalog()

 // Esconder opções de autenticação
 optLogout.style.display = 'none'
 optHi.style.display = 'none'
 btnAddTrip.style.display = 'none'

 let frmLogin = document.getElementById("frmLogin")
 // SUBMISSÃO DE AUTENTICAÇÃO
 frmLogin.addEventListener("submit", function(event) { 
    // Obter as referências para as caixas de texto
    let inputLoginEmail = document.getElementById("inputLoginEmail")
    let inputLoginPassword = document.getElementById("inputLoginPassword")

    console.log("Email: " + inputLoginEmail.value)
    console.log("Pass: " + inputLoginPassword.value)

    // Iterar sobre o array e verificar se o utilizador já existe
    let userExists = false
    let userName = ""
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == inputLoginEmail.value && users[i].password == inputLoginPassword.value) {
            userExists = true
            userId = users[i].id
            userName = users[i].name
        }        
    }   

    // Se sim, autenticar utilizador
    if(userExists == true) {
        alert("Autenticação efetuado com sucesso!!")
        // Fechar a modal
        $('#loginModal').modal('hide')
        // Alterar navbar 
        optLogin.style.display = 'none'
        optRegister.style.display = 'none'
        optLogout.style.display = 'block'
        btnAddTrip.style.display = 'block'
        optHi.innerHTML = "<a class='nav-link' href='#'>Olá, " +
        userName + "</a>"
        optHi.style.display = 'block'

        // Atualizar o meu catálogo
        renderCatalog(userId)
    } else {
        // Se não, exibir mensagem a indicar a inexistência do utilizador no array
        alert("Dados de autenticação inválidos!!")
    }
    event.preventDefault()

 })

 // SUBMISSÃO DE REGISTO
 let frmRegister = document.getElementById("frmRegister")
 frmRegister.addEventListener("submit", function() { 
 // 1. Validar pass iguais
 let inputPassword1 = document.getElementById("inputPassword1")
 let inputPassword2 = document.getElementById("inputPassword2")
 let strError = ""

 console.log(inputPassword1.value)
 console.log(inputPassword2.value)

 if (inputPassword1.value != inputPassword2.value) {
 strError = "As passwords têm de ser iguais" 
 }

 // 2. Validar se já existe um user com o mesmo email
 let inputEmail = document.getElementById("inputEmail")
 let userExist = false
 for (var i = 0; i < users.length; i++) {
 if (users[i].email == inputEmail.value) {
 userExist = true
 } 
 }

 if(userExist == true) {
 strError += "\nEmail já existente!"
 }

 // 3. Criar o utilizador
 if (strError=="") {
 let inputName = document.getElementById("inputName")
 let newUser = new User(inputName.value, inputEmail.value, inputPassword1.value)
 // 4. Adicionar ao array
 users.push(newUser)
 userId = newUser.id

 // 5. Alerta de sucesso!
 alert("Registo efetuado com sucesso!!")
 // 6. Fechar a modal
 $('#registoModal').modal('hide')
 // 7. ALterar navbar 
 
 optLogin.style.display = 'none'
 optRegister.style.display = 'none' 
 optLogout.style.display = 'block'
 btnAddTrip.style.display = 'block'
 
 optHi.innerHTML = "<a class='nav-link' href='#'>Olá, " +
 newUser.name + "</a>"
 optHi.style.display = 'block'

 } else {
 alert(strError) 
 frmRegister.reset()
 inputName.focus()
 }
 event.preventDefault()
 })

 // LOGOUT
 optLogout.addEventListener("click", function () {
    userId = 0
    optLogin.style.display = 'block'
    optRegister.style.display = 'block'
    optLogout.style.display = 'none'
    optHi.style.display = 'none'
    btnAddTrip.style.display = 'none'
 })

 // SUBMETER VIAGEM
 let frmTripRegister = document.getElementById("frmTripRegister")
 frmTripRegister.addEventListener("submit", function(event) { 
    
    // Obter valores do formulário da modal "Adicionar Viagem"
    let inputName = document.getElementById("inputName")
    let inputCountry = document.getElementById("inputCountry")
    let inputDate = document.getElementById("inputDate")
    let inputDesc = document.getElementById("inputDesc")
    let inputScore = document.getElementById("inputScore")
    let inputLink = document.getElementById("inputLink")

    // Criar objeto Trip
    let newTrip = new Trip(inputName.value,
                            inputCountry.value,
                            inputLink.value,
                            inputDate.value,
                            inputDesc.value,
                            inputScore.value,
                            userId)
    // Adicionar novo objeto ao array trips
    trips.push(newTrip)
    // Fechar a modal
    $('#addTripModal').modal('hide')     
    // Renderizar catálogo
    renderCatalog(userId)

    event.preventDefault()
 })



// SUBMETER VIAGEM
let btnSearch = document.getElementById("btnSearch")
btnSearch.addEventListener("click", function(event) { 
   
    // 1. Buscar os valores dos selects
    let selUsers = document.getElementById("selUsers")
    let selCountries = document.getElementById("selCountries")

    // 2. Renderizar catálogo
    console.log(userId)
    console.log(selUsers.value)
    console.log(selCountries.value)

    renderCatalog(selUsers.value, selCountries.value)



})

}





// Função que vai alimentar o meu catálogo
function renderCatalog(userId = 0, countryId = 0) {

    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""
    for (var i = 0; i < trips.length; i++) {
        if ((userId == 0 && countryId == 0) ||
            (userId == 0 && countryId == trips[i].country) ||
            (userId == trips[i].userId && countryId == 0) ||
            (userId == trips[i].userId && countryId == trips[i].country)) {
            
            // Inicia a linha
            if(i % 3 == 0) {
                strHtmlCard += `<div class="row">`    
            }

            // Cria a card
            strHtmlCard += `<div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${trips[i].link}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${trips[i].name}</h5>
                        <p class="card-text">${trips[i].description}</p>`
            if (userId!=0) {
                
                strHtmlCard += `<a id="${trips[i].id}" href="#" class="btn btn-danger remove">REMOVE</a>`    
            }                        
            strHtmlCard += `</div>
                </div>      
            </div>`
            
            // Fecha a linha
            if(i % 3 == 2) {
                strHtmlCard += `</div>`    
            }        
     }
    }
    let tripsCatalog = document.getElementById("tripsCatalog")
    tripsCatalog.innerHTML = strHtmlCard

    // Obter todos os botões REMOVE
    let btnRemove = document.getElementsByClassName("remove")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function() {
            // By clicking in a specific game, remove it from the array
            let tripId = btnRemove[i].getAttribute("id")
            removeTripById(tripId)
            renderCatalog(userId)
        })        
    }
}



// Remove viagem baseada no seu ID
function removeTripById(id) {
    console.log("ID: " + id)
    for (let i = 0; i < trips.length; i++) {
        if(trips[i].id == id) {
            trips.splice(i, 1)
        }                  
    }
}


// Preencher combobox com autores
function renderAuthors() {
    let tempUsers = []
    // 1. Iterar sobre o array Trips
    for (var i = 0; i < trips.length; i++) {
        if (tempUsers.indexOf(trips[i].userId) == -1) {
            // 2. Guardar todos os usersId não duplicados
            tempUsers.push(trips[i].userId)    
        }
    }   

    // 3. Criar o HTML (option) para todos os users encontrados
    let strHtml = "<option value=''>Todos</option>"
    for (let i = 0; i < tempUsers.length; i++) {
        // Obter o nome do autor no array users
        for (let j = 0; j < users.length; j++) {
            if(users[j].id == tempUsers[i]) {
                strHtml += `<option value='${tempUsers[i]}'>${users[j].name}</option>` 
            }            
        }
    }

    let selUsers = document.getElementById("selUsers")
    selUsers.innerHTML = strHtml
}

// Preencher combobox com countries
function renderCountries() {
    let tempCountries = []
    // 1. Iterar sobre o array Trips
    for (var i = 0; i < trips.length; i++) {
        if (tempCountries.indexOf(trips[i].country) == -1) {
            // 2. Guardar todos os country não duplicados
            tempCountries.push(trips[i].country)    
        }
    }   

    // 3. Criar o HTML (option) para todos os countries encontrados
    let strHtml = "<option value=''>Todos</option>"
    for (let i = 0; i < tempCountries.length; i++) {       
        strHtml += `<option value='${tempCountries[i]}'>${tempCountries[i]}</option>`             
    }

    let selCountries = document.getElementById("selCountries")
    selCountries.innerHTML = strHtml
}
