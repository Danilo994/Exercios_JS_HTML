function promo(){

    var txtVeiculo = document.getElementById('txtVeiculo');
    var numPreco = document.getElementById('numPreco');
    var outVeiculo = document.getElementById('outVeiculo');
    var outEntrada = document.getElementById('outEntrada');
    var outParcelas = document.getElementById('outParcelas');

    var veiculo = txtVeiculo.value;
    var preco = numPreco.value;

    var entrada = preco / 2;
    var parcelas = (preco / 2) / 12;

    outVeiculo.textContent = veiculo
    outEntrada.textContent = "Entrada de R$"+ entrada.toFixed(2);
    outParcelas.textContent = "+ 12x de R$"+ parcelas.toFixed(2);
}

var btnPromo = document.getElementById('btnPromo');
btnPromo.addEventListener('click', promo);