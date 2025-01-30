export default class pegerTransacao {
  constructor(dataDiv) {
    this.dataDiv = document.querySelector(dataDiv);
  }

  async transacaoPegar() {
    const response = await fetch(
      ' https://ranekapi.origamid.dev/json/api/transacao?tipo=comprador_id',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      },
    );
    const dados = await response.json();
    console.log(dados);
    this.botarNaTela(dados);
  }

  botarNaTela(dados) {
    const divDados = document.createElement('div');
    divDados.classList.add('div-transacao');
    dados.forEach((item) => {
      divDados.innerHTML = `
      <div class="div-imagem-compra">
        <img src="${item.produto.fotos[0].src}" titl="imagem" />
      </div>
      <div class="conteudo-transacao">
        <p>R$${item.produto.preco}<p>
        <h2>${item.produto.nome}</h2>
        <p class=""><span class="p-vendedor">Vendedor:</span>${item.vendedor_id}<p>
      </div>
      `;
      this.dataDiv.appendChild(divDados);
    });
  }

  init() {
    if (window.location.href === '/code/html/compras.html')
      this.transacaoPegar();
    console.log(this.dataDiv);
  }
}
