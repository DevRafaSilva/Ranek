export default class vendasFecth {
  constructor(dataVenda) {
    this.dataVenda = document.querySelector(dataVenda);
  }

  async vendasPegar() {
    const response = await fetch(
      ' https://ranekapi.origamid.dev/json/api/transacao?tipo=vendedor_id',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      },
    );
    const dados = await response.json();
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
        <div class="grid-endereco">
        <h3>Entrega</h3>
        </div>
        <div class="dados-endereco">
          <p>Cep: ${item.endereco.cep}</p>
          <p>Rua: ${item.endereco.rua}</p>
          <p>Cidade: ${item.endereco.cidade}</p>
          <p>Estado: ${item.endereco.numero}</p>
          <p>Número: ${item.endereco.estado}</p>
          <p>Bairro: ${item.endereco.bairro}</p>
        </div>
      `;
      this.dataVenda.appendChild(divDados);
    });
  }

  init() {
    if (window.location.href === '/code/html/vendas.html') this.vendasPegar();
  }
}
