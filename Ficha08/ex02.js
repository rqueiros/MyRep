// Defines an array with Personlity objects
let games = []

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

    let frmGames = document.getElementById("frmGames")

    frmGames.addEventListener("submit", function(event) {
        
        // 1. Validar o campo Platforms
        let platforms = []
        let strError = ""

        let nodesPlatform = document.getElementsByClassName("form-check-input")        
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
            // 2. Criar um objeto Game
            let name = document.getElementById("inputName").value
            let genre = document.getElementById("inputGenre").value
            let photo = document.getElementById("inputPhoto").value
    
            let newGame = new Game(name, genre, platforms, photo) 

            // 3. Push the new object to the array
            games.push(newGame)

            // 4. Render table
            renderTable()
        } else {
            alert(strError)            
        }
       
        event.preventDefault();
    })



    // Function to render the Game objects in the table
    function renderTable() {
        
        let tblGames = document.getElementById("tblGames")

        let strHtml = "<thead class='thead-dark'><tr>" +
        "<th class='w-2'>#</th>" +
        "<th class='w-50'>Name</th>" +
        "<th class='w-20'>Genre</th>" +
        "<th class='w-20'>Platforms</th>"+  
        "<th class='w-8'>Actions</th>" +              
        "</tr>" + 
        "</thead><tbody>"

        for (var i = 0; i < games.length; i++) {
            strHtml += "<tr>" +
            "<td>" + games[i].id + "</td>" +
            "<td>" + games[i].name + "</td>" +
            "<td>" + games[i].genre + "</td>" +
            "<td>" + games[i].platforms + "</td>" +
            "<td>" +
                "<i class='fas fa-edit'></i> " +
                "<a id='" + games[i].id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "<i class='fas fa-eye'></i>" +
            "</td>" +                         
            "</tr>"
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
    }

    // Remove game based on its ID
    function removeGameById(id) {
        for (let i = 0; i < games.length; i++) {
            if(games[i].id == id) {
                games.splice(i, 1)
            }                  
        }
    }


}