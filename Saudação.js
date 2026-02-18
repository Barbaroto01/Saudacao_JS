function saudar(nome) {
  if (nome && nome.trim() !== "") {
    return `Olá, ${nome}! É um prazer ter você por aqui.`;
  } else {
    return "Olá! Bem-vindo(a)!";
  }
}

function mostrarSaudacao() {
  let nomeUsuario = document.getElementById("nomeInput").value;
  let mensagem = saudar(nomeUsuario);
  document.getElementById("mensagem").textContent = mensagem;
}
