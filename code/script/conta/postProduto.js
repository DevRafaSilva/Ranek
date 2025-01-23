export default class PostProduto {
  constructor(nome, preco, file, descricao, btnPost) {
    this.nome = document.querySelector(nome);
    this.preco = document.querySelector(preco);
    this.file = document.querySelector(file);
    this.descricao = document.querySelector(descricao);
    this.btnPost = document.querySelector(btnPost);
  }

  pegarDados() {
    const objDados = {
      nome: this.nome.value,
      preco: this.preco.value,
      descricao: this.descricao.value,
      file: this.file.files[0],
    };
    this.fecthPost(objDados);
  }

  async fecthPost(objDados) {
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
        body: JSON.stringify(objDados),
      },
    );
    const dados = await response.json();
    console.log(dados);
  }

  init() {
    this.btnPost.addEventListener('click', (event) => {
      this.pegarDados();
    });
  }
}
