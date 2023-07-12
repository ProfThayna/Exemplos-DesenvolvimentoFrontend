// Criação de um objeto pessoa
var pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor"
  };
  
  // Acessando as propriedades do objeto
  console.log("Nome: " + pessoa.nome);
  console.log("Idade: " + pessoa.idade);
  console.log("Profissão: " + pessoa.profissao);
  
  // Adicionando uma nova propriedade ao objeto
  pessoa.email = "joao@example.com";
  
  // Atualizando o valor de uma propriedade
  pessoa.idade = 26;
  
  // Exibindo todas as propriedades e valores do objeto
  console.log(pessoa);