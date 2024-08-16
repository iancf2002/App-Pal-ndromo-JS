const input = document.getElementById("input")

//função que reverte a palavra, o SPLIT separa a palavra em letras o REVERSE inverte a ordem delas e o JOIN as junta novamente (string)
function reverterString(str) {
    return str.split("").reverse().join("")
    
    
}
//função que faz a checagem se a palavra escrita pelo usuário é de fato um palíndromo ou não. imput.value= "" é para limpar a caixa de texto após a checagem
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
