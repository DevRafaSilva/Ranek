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
      files: this.file.files,
    };
    this.fecthPost(objDados);
  }

  async fecthPost(objDados) {
    const formData = new FormData();

    for (let i = 0; i < objDados.files.length; i++) {
      formData.append(objDados.files[i].name, objDados.files[i]);
    }
    formData.append('nome', objDados.nome);
    formData.append('preco', objDados.preco);
    formData.append('descricao', objDados.descricao);
    formData.append('vendido', true);
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
        body: formData,
      },
    );
    const dados = await response.json();
    console.log(dados);
  }

  init() {
    this.btnPost?.addEventListener('click', (event) => {
      event.preventDefault();
      this.pegarDados();
    });
  }
}
