import formatarMoeda from './formatarMoeda.js';
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
      let moedaFormatada = new formatarMoeda(produtos.preco);
      moedaFormatada.init();
      const criarDiv = document.createElement('div');
      criarDiv.classList.add('produto-div');
      console.log(produtos);
      criarDiv.innerHTML = `
      <img src="${produtos.fotos[0].src}" title="${produtos.fotos[0].titulo}"/>
      <div class="div-item">
        <p>${moedaFormatada.formatar()}</p>
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
