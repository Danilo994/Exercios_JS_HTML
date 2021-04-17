function calcular(){

    var numQuilos = document.getElementById('numQuilos')
    var numGramas = document.getElementById('numGramas')
    var outValor = document.getElementById('outValor')

    var quilos = numQuilos.value;
    var gramas = numGramas.value;

    var valor = ( quilos / 1000) * gramas;

    outValor.textContent ='Valor a pagar R$'+ valor.toFixed(2);
}

var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular)