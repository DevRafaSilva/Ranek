import formatarMoeda from './formatarMoeda.js';
import pesquisarFecth from './pesquisaFetch.js';
export default class getProdutos {
  constructor(dataProdutoHTML, dataPaginacao) {
    this.dataProdutoHTML = document.querySelector(dataProdutoHTML);
    this.dataPaginacao = document.querySelector(dataPaginacao);
    this.dados = [];
    this.indexBtnClicado = 0;
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
      this.paginacao(this.dados);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  paginacao(dados) {
    console.log(dados);
    this.dataPaginacao.innerHTML = '';
    const limiteItens = 3;
    const totalPaginas = Math.ceil(dados.length / limiteItens);

    for (let i = 1; i <= totalPaginas; i++) {
      const botao = document.createElement('button');
      botao.innerText = i;
      this.dataPaginacao.appendChild(botao);

      botao.addEventListener('click', () => {
        this.indexBtnClicado = i;
        this.navegar(this.indexBtnClicado, dados, limiteItens);
      });
    }

    this.navegar(1, dados, limiteItens);
  }

  navegar(indexBtn, dados, limiteItens) {
    let contador = (indexBtn - 1) * limiteItens;
    let limitador = contador + limiteItens;

    let arrayResultado = dados.slice(contador, limitador);

    this.setarProdutosNoHtml(arrayResultado);
  }

  setarProdutosNoHtml(dados) {
    console.log(dados);
    this.dataProdutoHTML.innerHTML = '';
    dados.forEach((produtos) => {
      let moedaFormatada = new formatarMoeda(produtos.preco);
      moedaFormatada.init();

      const criarDiv = document.createElement('div');
      criarDiv.classList.add('produto-div');
      criarDiv.innerHTML = `
      <a href="/code/html/produto.html">
        <img src="${produtos.fotos && produtos.fotos[0].src}" title="${
        produtos.fotos && produtos.fotos[0].titulo
      }"/>
        <div class="div-item">
          <p>${moedaFormatada.formatar()}</p>
          <h2>${produtos.nome}</h2>
          <p>${produtos.descricao}</p>
        </div>
      </a>
      `;
      this.dataProdutoHTML.appendChild(criarDiv);
    });
    this.pegarIdProduto();
  }

  pegarIdProduto() {
    let produtoDiv = document.querySelectorAll('.produto-div');
    produtoDiv.forEach((itemDiv, index) => {
      itemDiv.addEventListener('click', () => {
        window.localStorage.setItem('id', this.dados[index].id);
      });
    });
  }

  init() {
    window.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.getProdutosFetch();
      }
    });
    this.getProdutosFetch();
  }
}
