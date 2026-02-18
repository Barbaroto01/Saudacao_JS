function saudar(nome) {
  if (nome && nome.trim() !== "") {
    return `Olá, ${nome}! É um prazer ter você por aqui.`;
  }
  return "Olá! Bem-vindo(a)!";
}

function mostrarSaudacao() {
  const nomeUsuario = document.getElementById("nomeInput").value;
  const mensagem = saudar(nomeUsuario);
  document.getElementById("mensagem").textContent = mensagem;
}

document.getElementById("btnSaudar").addEventListener("click", mostrarSaudacao);
