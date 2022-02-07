function calculadora (){
const operacoes = Number(prompt("digite o numero da operacao que deseja realizar. \n SOMA - 1 \n SUBTRACAO - 2 \n MULTIPLICACAO - 3 \n DIVISAO - 4 \n DIVISAO INTEIRA - 5 \n RESTO DA DIVISAO INTEIRA - 6 \n POTENCIAÇÃO - 7 \n FATORIAL - 8 \n"))
    if ((operacoes >= 9) || (operacoes <= 0)) {
        alert("erro, valor invalido digite novamente")
        calculadora()
    } else if (operacoes < 8) {
        var n1 = Number(prompt('digite o primeiro valor da operacao'))
        var n2 = Number(prompt('digite o segundo valor da operacao'))
        if (!n1 || !n2) {
            alert('digite um numero valido')
            calculadora()
        }
    }  
     else { 
        var n1 = Number(prompt('digite o valor da operacao'))
        if (!n1) {
            alert('digite um numero valido')
            calculadora()
        }
    }

if ( operacoes == 1){
var result = n1 + n2
alert (`o resultado é ${result}`)
}
else if ( operacoes == 2){
var result = n1 - n2
alert (`o resultado é ${result}`)
}
else if ( operacoes == 3){
var result = n1 * n2
alert (`o resultado é ${result}`)
}
else if ( operacoes == 4){
var result = n1 / n2
alert (`o resultado é ${result}`)
}
else if ( operacoes == 5){
var result = parseInt(n1 / n2)
alert (`o resultado é ${result}`)
}
else if ( operacoes == 6){
var result = n1 % n2
alert (`o resultado é ${result}`)
}
else if ( operacoes == 7){
var result = n1 ** n2
alert (`o resultado é ${result}`)
}
else if ( operacoes == 8){
    var result = 1  
    while (n1 >= 2 ){
        var result = result * n1 
        n1 --

    }

alert (`o resultado é ${result}`)
}
const repeticao = Number(prompt('deseja fazer outra operacao? SIM - 1 \n NÃO - 2 \n'))
if( repeticao == 1){
    calculadora()
} else {
    alert('até mais')
}
}
calculadora()