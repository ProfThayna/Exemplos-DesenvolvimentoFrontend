<!DOCTYPE html>
<html>
<head>
  <title>Envio de Dados do Formulário</title>
</head>
<body>
  <h1>Formulário de Contato</h1>
  <form id="contactForm">
    <div>
      <label for="name">Nome:</label>
      <input type="text" id="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
    </div>
    <button type="submit">Enviar</button>
  </form>

  <script>
    // Selecionando o formulário
    const form = document.getElementById('contactForm');

    // Manipulando o evento de envio do formulário
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Obtendo os valores dos campos
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      // Exibindo os valores no console
      console.log('Nome:', name);
      console.log('Email:', email);

      // Aqui você pode adicionar código para enviar os dados para o servidor
    });
  </script>
</body>
</html>
