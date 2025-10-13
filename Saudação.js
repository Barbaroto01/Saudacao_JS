function saudar(nome) {
  if (nome && nome.trim() !== "") {
    return `Olá, ${nome}! É um prazer ter você por aqui.`;
  } else {
    return "Olá! Bem-vindo(a)!";
  }
}

let nomeUsuario = prompt("Qual é o seu nome?");
let mensagem = saudar(nomeUsuario);
alert(mensagem);
