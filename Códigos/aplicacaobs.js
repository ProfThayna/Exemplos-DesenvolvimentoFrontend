<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de Formulário Responsivo</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Formulário de Contato</h1>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input type="text" class="form-control" id="name" placeholder="Digite seu nome">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Digite seu email">
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Mensagem:</label>
        <textarea class="form-control" id="message" rows="5" placeholder="Digite sua mensagem"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>