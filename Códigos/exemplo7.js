<div class="container">
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="nome" class="form-label">Nome:</label>
          <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail:</label>
          <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" required>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label for="mensagem" class="form-label">Mensagem:</label>
      <textarea class="form-control" id="mensagem" rows="4" placeholder="Digite sua mensagem" required></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
</div>