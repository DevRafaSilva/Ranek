export default class pegarProdutosUsuario {
  constructor(dataProdutos) {
    this.dataProdutos = document.querySelector(dataProdutos);
  }

  async fetchProdutoUsuari() {
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto',
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
  }

  init() {
    this.fetchProdutoUsuari();
  }
}
