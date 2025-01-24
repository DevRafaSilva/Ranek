export default class pegarProdutosUsuario {
  constructor(dataProdutos) {
    this.dataProdutos = document.querySelector(dataProdutos);
  }

  async fetchProdutoUsuari() {
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
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
    if (window.location.href == 'http://127.0.0.1:5500/code/html/conta.html')
      this.fetchProdutoUsuari();
  }
}
