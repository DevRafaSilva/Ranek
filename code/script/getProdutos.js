import formatarMoeda from './formatarMoeda.js';
import pesquisarFecth from './pesquisaFetch.js';
export default class getProdutos {
  constructor(dataProdutoHTML) {
    this.dataProdutoHTML = document.querySelector(dataProdutoHTML);
    this.dados = [];
  }

  async getProdutosFetch() {
    const pesquisa = new pesquisarFecth('[data-input-pesquisa]');
    pesquisa.init();
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      const dados = await response.json();
      this.dados = dados;

      this.dados = await pesquisa.pesquisar();
      this.setarProdutosNoHtml(this.dados);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  setarProdutosNoHtml(dados) {
    this.dataProdutoHTML.innerHTML = '';
    dados.forEach((produtos) => {
      let moedaFormatada = new formatarMoeda(produtos.preco);
      moedaFormatada.init();

      const criarDiv = document.createElement('div');
      criarDiv.classList.add('produto-div');
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
    window.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') this.getProdutosFetch();
    });
    this.getProdutosFetch();
  }
}
