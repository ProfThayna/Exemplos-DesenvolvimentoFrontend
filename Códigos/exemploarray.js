// Criando um array
const frutas = ['Maçã', 'Banana', 'Laranja', 'Abacaxi'];

// Acessando elementos do array
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[2]); // Saída: Laranja

// Modificando um elemento do array
frutas[1] = 'Morango';
console.log(frutas); // Saída: ['Maçã', 'Morango', 'Laranja', 'Abacaxi']

// Adicionando elementos ao final do array
frutas.push('Uva');
console.log(frutas); // Saída: ['Maçã', 'Morango', 'Laranja', 'Abacaxi', 'Uva']

// Removendo o último elemento do array
frutas.pop();
console.log(frutas); // Saída: ['Maçã', 'Morango', 'Laranja', 'Abacaxi']

// Obtendo o tamanho do array
console.log(frutas.length); // Saída: 4

// Iterando sobre os elementos do array
frutas.forEach(function(fruta) {
  console.log(fruta);
});
// Saída:
// Maçã
// Morango
// Laranja
// Abacaxi


//Passo 2:
npx create-react-app nome-do-projeto

//Passo 3:
cd nome-do-projeto

//Passo 4:
npm start
