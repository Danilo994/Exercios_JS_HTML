function calcular(){
    var numMinutos = document.getElementById('numMinutos')
    var numTempo = document.getElementById('numTempo')
    var outPagar = document.getElementById('outPagar')

    var minutos = numMinutos.value
    var tempo = numTempo.value

    var pagar = Math.ceil(tempo / 15) * minutos

    outPagar.textContent ='Valor a pagar R$'+ pagar.toFixed(2)
}

var btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', calcular)