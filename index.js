const input = document.getElementById("input")

function reverterString(str) {
    return str.split("").reverse().join("")
    
    
}

function checar() {
    const value = input.value
    const reverse = reverterString(value)
    
    if (value === reverse) {
        alert("PALÍNDROMO")
    } else {
        alert("Nâo é um Palíndromo")
    }

    input.value = ""
}