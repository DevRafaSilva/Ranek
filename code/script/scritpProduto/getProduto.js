import formatarMoeda from '../formatarMoeda.js';
export default class getProduto {
  constructor(dataProdutoItem) {
    this.dataProdutoItem = document.querySelector(dataProdutoItem);
    this.dadosItem = [];
  }

  async produto() {
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${window.localStorage.getItem(
          'id',
        )}`,
      );
      const dados = await response.json();
      console.log(dados);
      this.dadosItem = dados;
      this.colocarNaTelaProduto();
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  colocarNaTelaProduto() {
    console.log(this.dadosItem);

    let moedaFormatada = new formatarMoeda(this.dadosItem.preco);
    moedaFormatada.init();

    this.dataProdutoItem.innerHTML = '';
    this.dadosItem.fotos.forEach((img) => {
      const criarDiv = document.createElement('div');
      criarDiv.classList.add('grid-produto');
      console.log(img.src);
      criarDiv.innerHTML = ` 
      <div>
        <img src="${img.src}" title="${img.title}" />
      </div>
    `;
      this.dataProdutoItem.appendChild(criarDiv);
    });
    const criarDivConteudo = document.createElement('div');
    criarDivConteudo.classList.add('conteudo-produto');
    criarDivConteudo.innerHTML = `
    <div class="div-item produto-item">
      <p class="preco-item">${moedaFormatada.formatar()}</p>
      <h2 class="titulo-item">${this.dadosItem.nome}</h2>
      <p class="descricao-item">${this.dadosItem.descricao}</p>
      <a class="btn-principal" href="#">Comprar</a>
    </div>;
    `;
    this.dataProdutoItem.appendChild(criarDivConteudo);
  }

  init() {
    this.produto();
  }
}
