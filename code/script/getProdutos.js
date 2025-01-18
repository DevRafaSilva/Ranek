export default class getProdutos {
  constructor(dataProdutoHTML) {
    this.dataProdutoHTML = document.querySelector(dataProdutoHTML);
  }

  async getProdutosFetch() {
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      const dados = await response.json();
      console.log(dados);
      this.setarProdutosNoHtml(dados);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  setarProdutosNoHtml(dados) {
    dados.forEach((produtos) => {
      const criarDiv = document.createElement('div');
      criarDiv.classList.add('produto-div');
      console.log(produtos);
      criarDiv.innerHTML = `
      <img src="${produtos.fotos[0].src}" title="${produtos.fotos[0].titulo}"/>
      <div class="div-item">
        <p>${produtos.preco}</p>
        <h2>${produtos.nome}</h2>
        <p>${produtos.descricao}</p>
      </div>
      `;
      this.dataProdutoHTML.appendChild(criarDiv);
    });
  }

  init() {
    this.getProdutosFetch();
  }
}
