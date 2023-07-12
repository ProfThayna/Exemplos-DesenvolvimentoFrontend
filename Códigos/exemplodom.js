<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de Manipulação do DOM</title>
</head>
<body>
  <div id="container">
    <h1>Manipulação do DOM</h1>
    <p>Este é um exemplo de manipulação do DOM.</p>
  </div>

  <script>
    // Selecionando o elemento pai
    const container = document.getElementById('container');

    // Criando um novo elemento
    const newElement = document.createElement('p');
    newElement.textContent = 'Este é um novo parágrafo adicionado dinamicamente.';

    // Adicionando o novo elemento como filho do elemento pai
    container.appendChild(newElement);
  </script>
</body>
</html>
