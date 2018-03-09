// Alínea A
function funcA() {

    let numbers = [7, 3, 6, 12, 5]
    let total = 0
    for(let i=0; i<numbers.length; i++) {
        total += numbers[i]
    }
    let average = total / numbers.length

    // Apresentação dos resultados
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML = average
}