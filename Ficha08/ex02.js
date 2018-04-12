
// Defines a class to represent Personalities
class Game {
    constructor(name, genre, platforms, photo) {
        this.name = name
        this.genre = genre
        this.platforms = platforms        
        this.photo = photo
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
}

// Defines an array with Personlity objects
let games = []




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

        let strHtml = "<thead><tr><th>#</th>" +
        "<th>Name</th>" +
        "<th>Genre</th>" +
        "<th>Platforms</th>"+        
        "<th>Photo</th>"+
        "</tr>" + 
        "</thead><tbody>"

        for (var i = 0; i < games.length; i++) {
            strHtml += "<tr>" +
            "<td>" + (i+1) + "</td>" +
            "<td>" + games[i].name + "</td>" +
            "<td>" + games[i].genre + "</td>" +
            "<td>" + games[i].platforms + "</td>" +            
            "<td>" + games[i].photo + "</td>" +
            "</tr>"
        }
        strHtml += "</tbody>"

        tblGames.innerHTML = strHtml

    }


}