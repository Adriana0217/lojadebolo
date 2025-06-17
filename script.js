function comprar(nomeDoBolo) {
  const telefone = "5541991810217"; // coloque seu número real aqui
  const mensagem = `Olá, quero comprar um ${nomeDoBolo} da Vó Marcela! `;
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  // Trocar window.open por isso aqui 👇
  window.location.href = url;
}
