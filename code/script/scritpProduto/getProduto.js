import formatarMoeda from '../formatarMoeda.js';
import formularioAbrir from './abrirFormulario.js';
import pegarDadosCompra from './pegarDadosCompra.js';
import fazerCompra from './fazerCompra.js';

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
    <div class="container-produto">
    <p class="preco-item">${moedaFormatada.formatar()}</p>
    <h2 class="titulo-item">${this.dadosItem.nome}</h2>
      <p class="descricao-item">${this.dadosItem.descricao}</p>
      <a data-btn-formulario class="btn-principal" href="#">Comprar</a>
      <div data-formulario class="formulario">
      <div>
      <label for="nome">Nome</label>
      <input data-dados-compra id="nome" name="nome" type="text" />
      </div>
      <div>
        <label for="email">Email</label>
        <input data-dados-compra id="email" name="email" type="email" />
        </div>
        <div>
        <label for="senha">Senha</label>
        <input data-dados-compra id="senha" name="senha" type="password" />
        </div>
        <div>
        <label for="cep">Cep</label>
        <input data-endereco data-dados-compra id="cep" name="cep" type="number" />
        </div>
        <div>
        <label for="rua">Rua</label>
        <input data-endereco data-dados-compra id="rua" name="rua" type="text" />
        </div>
        <div>
        <label for="numero">Número</label>
        <input data-endereco data-dados-compra id="numero" name="numero" type="number" />
        </div>
        <div>
        <label for="cidade">cidade</label>
        <input data-endereco data-dados-compra id="cidade" name="cidade" type="text" />
        </div>
        <div>
        <label for="cidade">Bairro</label>
        <input data-endereco data-dados-compra id="bairro" name="bairro" type="text" />
        </div>
        <div>
        <label for="estado">Estado</label>
        <input data-endereco data-dados-compra id="estado" name="estado" type="text" />
        </div>
        <div class="div-btn-compra">
          <button data-comprar-btn>Finalizar Compra</button>
        </div>
        </div>
      </div>
    </div>
    `;

    let btnFormulario = criarDivConteudo.querySelector('[data-btn-formulario]');
    let formularioContainer =
      criarDivConteudo.querySelector('[data-formulario]');

    let form = new formularioAbrir(btnFormulario, formularioContainer);
    form.init();
    this.dataProdutoItem.appendChild(criarDivConteudo);
    const pegarDados = new pegarDadosCompra(
      '.conteudo-produto [data-dados-compra]',
    );
    pegarDados.init();
    const comprar = new fazerCompra(
      '.conteudo-produto [data-comprar-btn]',
      '.conteudo-produto [data-endereco]',
    );
    comprar.inti();
  }

  init() {
    this.produto();
  }
}
