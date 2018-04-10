
// Defines a class that represents a Personality
class Personality {
    // Defines a constructor that will create an object
    constructor(name, year, nacionality, work, photo) {
        this.name = name
        this.year = year
        this.nacionality = nacionality
        this.work = work
        this.photo = photo
    }

    // Property name
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
    
    // Year property
    get year() {
        return this._year
    }
    set year(newYear) {
        this._year = newYear
    }

    // Nacionality property
    get nacionality() {
        return this._nacionality
    }
    set nacionality(newNacionality) {
        this._nacionality = newNacionality
    }

    // Work property
    get work() {
        return this._work
    }
    set work(newWork) {
        this._work = newWork
    }

    // Photo property
    get photo() {
        return this._photo
    }
    set photo(newPhoto) {
        this._photo = newPhoto
    }
}

// Creates an array to store Personalities objects
let personalities = []

window.onload = function() {

     // Assign the current year to the Max attribute of the year input element
     let maxYearOfBirth = document.getElementById("inputYear")
     let currentYear = new Date().getFullYear()
     maxYearOfBirth.setAttribute("max", currentYear)
 
    // Add listener to the form
    let frmPersonalities = document.getElementById("frmPersonalities")
    frmPersonalities.addEventListener("submit", function(event) {
        console.log("ENTREI")
        // 1. Get the form values
        let name = document.getElementById("inputName").value
        let year = document.getElementById("inputYear").value
        let nacionality = document.getElementById("inputNationality").value
        let work = document.getElementById("inputWork").value
        let photo = document.getElementById("inputPhoto").value

        // 2. Create an object based on those values
        let newPersonality = new Personality(name, year, nacionality, work, photo)

        // 3. Add the object to an array
        personalities.push(newPersonality)

        // 4. Render the table with all the objects!!
        renderTable()

        // Prevent the form of being submitted
        event.preventDefault()
    })




    function renderTable() {
        let tblPersonalities = document.getElementById("tblPersonalities")

        let strHtml = "<thead><tr><th >#</th>" +
          "<th>Name</th>" +
          "<th>Year</th>" +
          "<th>Nationality</th>"+
          "<th>Work</th>"+
          "<th>Photo</th>"+
          "</tr>" + 
          "</thead><tbody>"

        for (var i = 0; i < personalities.length; i++) {
            strHtml += "<tr>" + 
            "<th>" + (i+1) + "</th>" +
            "<td>" + personalities[i].name + "</td>" +
            "<td>" + personalities[i].year + "</td>" +
            "<td>" + personalities[i].nacionality + "</td>" +
            "<td>" + personalities[i].work + "</td>" +
            "<td>" + personalities[i].photo + "</td>" +
            "</tr>"            
        }  
        strHtml += "</tbody>"
        
        tblPersonalities.innerHTML = strHtml



    }





}