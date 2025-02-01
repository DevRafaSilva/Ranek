export default class atualizarUsuario {
  constructor(inputDados, btnAtualizar) {
    this.inputDados = document.querySelectorAll(inputDados);
    this.btnAtualizar = document.querySelector(btnAtualizar);
  }

  pegarDados() {
    const [nome, email, senha, cep, rua, numero, bairro, cidade, estado] =
      this.inputDados;
    const objDados = {
      nome: nome.value,
      email: email.value,
      senha: senha.value,
      cep: cep.value,
      rua: rua.value,
      numero: numero.value,
      bairro: bairro.value,
      cidade: cidade.value,
      estado: estado.value,
    };

    this.atualizar(objDados);
  }

  async atualizar(objDados) {
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
        body: JSON.stringify(objDados),
      },
    );
    const dados = await response.json();
  }

  init() {
    this.btnAtualizar?.addEventListener('click', () => {
      this.pegarDados();
    });
  }
}
