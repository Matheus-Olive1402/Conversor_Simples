//existe um button que tem um 'onclick' que por sua vez ativa essa function
function converter() {
  //document... ser para pegar o dados no input que tenha o id == ("")
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  //console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$: " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function convertorTemp() {
  var valorElemento = document.getElementById("Temp");

  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  //console.log(valorEmDolarNumerico);

  var valorEmReal = (valorEmDolarNumerico * 9) / 5 + 32;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertidoTemp");
  var valorConvertido = "O resultado em fahrenheit é: " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
