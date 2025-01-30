export default class usuarioLogin {
  constructor(dataEmail, dataSenha, dataBtn, dataError) {
    this.dataEmail = document.querySelector(dataEmail);
    this.dataSenha = document.querySelector(dataSenha);
    this.dataBtn = document.querySelector(dataBtn);
    this.dataError = document.querySelector(dataError);
  }

  pegarDados() {
    const objUsuario = {
      username: this.dataEmail.value,
      password: this.dataSenha.value,
    };
    console.log(objUsuario);
    this.fetchLogin(objUsuario);
  }

  async fetchLogin(objUsuario) {
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(objUsuario),
        },
      );
      const dados = await response.json();
      this.dataError.innerText = dados.message;
      window.localStorage.setItem('token', dados.token);
      window.localStorage.setItem('nome', dados.user_display_name);
      if (window.localStorage.getItem('token') !== 'undefined') {
        window.location.href = '/code/html/conta.html';
      }

      if (!dados && dados.data.status == 403) {
        throw new Error(dados.message);
      }
      console.log(dados);
    } catch (e) {
      console.log(e);
    }
  }

  init() {
    this.dataBtn?.addEventListener('click', (event) => {
      event.preventDefault();
      this.pegarDados();
    });
  }
}
