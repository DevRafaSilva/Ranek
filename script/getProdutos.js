import formatarMoeda from './formatarMoeda.js';
import pesquisarFecth from './pesquisaFetch.js';
export default class getProdutos {
  constructor(dataProdutoHTML, dataPaginacao, anterior, proximo) {
    this.dataProdutoHTML = document.querySelector(dataProdutoHTML);
    this.dataPaginacao = document.querySelector(dataPaginacao);
    this.anterior = document.querySelector(anterior);
    this.proximo = document.querySelector(proximo);
    this.dados = [];
    this.indexBtnClicado = 1;
    this.limiteItens = 0;
    this.btnPaginacao = null;
  }

  async getProdutosFetch() {
    const pesquisa = new pesquisarFecth('[data-input-pesquisa]');
    pesquisa.init();
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      const inputValorPesquisa = document.querySelector(
        '[data-input-pesquisa]',
      );
      if (inputValorPesquisa.value !== '') {
        this.dados = await pesquisa.pesquisar();
        this.setarProdutosNoHtml(this.dados);
        this.paginacao(this.dados);
      } else {
        this.dados = await response.json();
        this.paginacao(this.dados);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  paginacao(dados) {
    console.log(dados);
    this.dataPaginacao.innerHTML = '';
    this.limiteItens = 3;
    const totalPaginas = Math.ceil(dados.length / this.limiteItens);

    for (let i = 1; i <= totalPaginas; i++) {
      const botao = document.createElement('button');
      botao.innerText = i;
      this.dataPaginacao.appendChild(botao);

      botao.addEventListener('click', () => {
        this.indexBtnClicado = i;
        this.navegar(this.indexBtnClicado, this.dados, this.limiteItens);
      });

      const btn = this.dataPaginacao.querySelectorAll('button');
      this.btnPaginacao = btn;
      btn[0].classList.add('on');
      btn.forEach((item) => {
        item.addEventListener('click', () => {
          item.classList.remove('on');
          btn.forEach((item) => {
            item.classList.remove('on');
          });
          item.classList.add('on');
        });
      });
    }

    this.navegar(1, this.dados, this.limiteItens);
  }

  navegacaoAnterior() {
    if (this.indexBtnClicado > 1) {
      this.indexBtnClicado--;
      this.navegar(this.indexBtnClicado, this.dados, this.limiteItens);
      this.adicionarClassePaginacao(this.btnPaginacao);
    }
  }
  navegacaoProximo() {
    const totalPagina = Math.ceil(this.dados.length / this.limiteItens);
    if (this.indexBtnClicado < totalPagina) {
      this.indexBtnClicado++;
      this.navegar(this.indexBtnClicado, this.dados, this.limiteItens);
      this.adicionarClassePaginacao(this.btnPaginacao);
    }
  }

  adicionarClassePaginacao(botao) {
    botao?.forEach((btnItem) => {
      if (+btnItem.innerText == this.indexBtnClicado) {
        btnItem.classList.add('on');
      } else {
        btnItem.classList.remove('on');
      }
    });
  }

  navegar(indexBtn, dados, limiteItens) {
    let contador = (indexBtn - 1) * limiteItens;
    let limitador = contador + limiteItens;

    let arrayResultado = dados.slice(contador, limitador);

    this.setarProdutosNoHtml(arrayResultado);
  }

  setarProdutosNoHtml(dados) {
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
    this.anterior.addEventListener('click', () => {
      this.navegacaoAnterior();
    });
    this.proximo.addEventListener('click', () => {
      this.navegacaoProximo();
    });
  }
}
