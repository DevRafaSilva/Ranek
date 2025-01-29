export default class aAtualizarUsuario {
  constructor(dados, btnAtualizar) {
    this.dados = document.querySelectorAll(dados);
    this.btnAtualizar = document.querySelector(btnAtualizar);
  }

  pegarDados() {
    const dados = this.dados.dataset;
    console.log(dados);
    const objDados = {};
  }

  async fetchAtualizar() {
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/usuario',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
          },
          body: JSON.stringify(),
        },
      );
      const dados = await response.json();
      console.log(dados);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  init() {
    this.btnAtualizar.addEventListener('click', () => {
      this.pegarDados();
    });
  }
}
