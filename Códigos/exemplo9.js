// Criação de um array de números
var numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log("Primeiro número: " + numeros[0]);
console.log("Tamanho do array: " + numeros.length);

// Iteração pelos elementos do array
numeros.forEach(function(numero) {
  console.log(numero);
});

// Exemplo de utilização do map
var numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});
console.log("Números dobrados: " + numerosDobrados);

// Exemplo de utilização do filter
var numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});
console.log("Números pares: " + numerosPares);