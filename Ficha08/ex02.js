// Defines an array with Personlity objects
let games = []
let gameId = 0

// Defines a class to represent Personalities
class Game {
    constructor(name, genre, platforms, photo) {
        this._id = Game.getLastId() + 1
        this.name = name
        this.genre = genre
        this.platforms = platforms        
        this.photo = photo
    }

    // Property Id
    get id() {
        return this._id
    }

    // Property Name
    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName        
    }

    // Property Genre
    get genre() {
        return this._genre
    }

    set genre(newGenre) {
        this._genre = newGenre        
    }

    // Property Platforms
    get platforms() {
        return this._platforms
    }

    set platforms(newPlatforms) {
        console.log(newPlatforms)
        this._platforms = newPlatforms        
    }

    // Photo property
    get photo() {
        return this._photo
    }
    set photo(newPhoto) {
        this._photo = newPhoto
    }


    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (games.length > 0) {
            lastId = games[games.length-1].id
        }        
        return lastId
    }
}






window.onload = function() {
    // References to HTML objects
    let frmGames = document.getElementById("frmGames")
    let inputName = document.getElementById("inputName")
    let inputGenre = document.getElementById("inputGenre")
    let inputPhoto = document.getElementById("inputPhoto")
    let modalGameName = document.getElementById("modalGameName")
    let modalGameGenre = document.getElementById("modalGameGenre")
    let modalGamePlatforms = document.getElementById("modalGamePlatforms")
    let modalGameCover = document.getElementById("modalGameCover")
    let tblGames = document.getElementById("tblGames")
    let btnRemoveAll = document.getElementById("btnRemoveAll")
    let btnFilter = document.getElementById("btnFilter")
    let nodesPlatform = document.getElementsByClassName("form-check-input")

    // Add listener to form    
    frmGames.addEventListener("submit", function(event) {
        // Validate Platforms field
        let platforms = []
        let strError = ""
                
        for (let i = 0; i < nodesPlatform.length; i++) {
            if (nodesPlatform[i].checked == true) {                
                platforms.push(nodesPlatform[i].value)
            }            
        }

        // 1. Validar o campo Platforms (alternativa mais compacta)
        //console.log(document.querySelectorAll('input[type="checkbox"]:checked').length)
        
        if(platforms.length == 0) {
            strError = "Por favor, selecione pelo menos uma plataforma!"
        }
        
        if(strError == "") {
            // Verify if this is a new game or the update of an existent game
            if(gameId == 0) {
                // Create a new instance of Game            
                let newGame = new Game(inputName.value, inputGenre.value, platforms, inputPhoto.value) 
                // Push the new object to the array
                games.push(newGame)            
            } else {
                for (let i = 0; i < games.length; i++) {
                    if(games[i].id == gameId) {
                        games[i].name = inputName.value
                        games[i].genre = inputGenre.value
                        games[i].platforms = platforms
                        games[i].photo = inputPhoto.value
                    }                  
                }
                gameId = 0
            }

            // 4. Render table
            renderTable()
            // 5. Limpa tabela
            frmGames.reset()
        } else {
            alert(strError)            
        }       
        event.preventDefault();
    })

    // Add listener to RemoveAll button
    btnRemoveAll.addEventListener("click", function() {
        games = []        
        renderTable()
        let tblGames = document.getElementById("tblGames")
        tblGames.innerHTML = ""
    })

    // Add listener to Filter button
     btnFilter.addEventListener("click", function() {
        let genre = document.getElementById("inputGenre").value           
        renderTable(genre)
    })


//############ Functions ##############
// Function to render the Game objects in the table
function renderTable(genre = "") {
    let strHtml = "<thead class='thead-dark'><tr>" +
    "<th class='w-2'>#</th>" +
    "<th class='w-50'>Name</th>" +
    "<th class='w-20'>Genre</th>" +
    "<th class='w-20'>Platforms</th>"+  
    "<th class='w-8'>Actions</th>" +              
    "</tr>" + 
    "</thead><tbody>"

    for (var i = 0; i < games.length; i++) {
        if (genre==games[i].genre || genre=="") {
            strHtml += "<tr>" +
            "<td>" + games[i].id + "</td>" +
            "<td>" + games[i].name + "</td>" +
            "<td>" + games[i].genre + "</td>" +
            "<td>" + games[i].platforms + "</td>" +
            "<td>" +
                "<a id='" + games[i].id + "' class='edit'><i class='fas fa-edit'></i></a> " +
                "<a id='" + games[i].id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "<a id='" + games[i].id + "' class='view' data-toggle='modal' data-target='#gameModal'><i class='fas fa-eye'></i></a>" +
            "</td>" +                         
            "</tr>" 
        }        
    }
    strHtml += "</tbody>"
    tblGames.innerHTML = strHtml

    // Get all the remove links from the table
    let tdRemove = document.getElementsByClassName("remove")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function() {
            // By clicking in a specific game, remove it from the array
            let gameId = tdRemove[i].getAttribute("id")
            removeGameById(gameId)
            renderTable()
        })        
    }

    // Get all the view links from the table
    let tdView = document.getElementsByClassName("view")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdView.length; i++) {
        tdView[i].addEventListener("click", function() {
            // By clicking in a specific game, view it in a modal
            let gameId = tdView[i].getAttribute("id")
            viewGameById(gameId)                
        })        
    }

    // Get all the edit links from the table
    let tdEdit = document.getElementsByClassName("edit")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdEdit.length; i++) {
        tdEdit[i].addEventListener("click", function() {
            // By clicking in a specific game, edit in the form
            let gameId = tdEdit[i].getAttribute("id")
            editGameById(gameId)                
        })        
    }
}

// Remove game based on its ID
function removeGameById(id) {
    for (let i = 0; i < games.length; i++) {
        if(games[i].id == id) {
            games.splice(i, 1)
        }                  
    }
}

// View game based on its ID
function viewGameById(id) {        
    for (let i = 0; i < games.length; i++) {
        if(games[i].id == id) {
            modalGameName.innerHTML= games[i].name                
            modalGameGenre.innerHTML = games[i].genre
            modalGamePlatforms.innerHTML =  games[i].platforms
            modalGameCover.setAttribute("src", games[i].photo)                
        }                  
    }
}

// Edit game based on its ID
function editGameById(id) {    
    // Update global variable
    gameId = id
    // Iterate from all the games and fill the form with the games data
    for (let i = 0; i < games.length; i++) {
        if(games[i].id == id) {
            inputName.value = games[i].name
            inputGenre.value = games[i].genre
            inputPhoto.value = games[i].photo                
            // Check the boxes that belongs to the array games.plataforms
            for (let j = 0; j < nodesPlatform.length; j++) {
                console.log(nodesPlatform[j].getAttribute("value"))
                if (games[i].platforms.indexOf(nodesPlatform[j].getAttribute("value")) != -1) {                
                    nodesPlatform[j].checked = true
                }  else {
                    nodesPlatform[j].checked = false
                }          
            }
            //OU
            /*
            games[i].platforms.forEach(element => {
                document.querySelector("input[type='checkbox'][value='" + element + "']").checked = true 
            });
            */
        }                  
    }
}

}
