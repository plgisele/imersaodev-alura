//Inserir o valor em dólar
var valorEmDolar = parseFloat(prompt("Qual o valor em dólar que você quer converter?"));

//Conversão do valor em real
var valorEmReal = valorEmDolar * 5.50;
//Valor em real com 2 casas decimais
var valorEmRealDec = valorEmReal.toFixed(2);

//Apresentação do valor em real
alert("R$ " + valorEmRealDec);