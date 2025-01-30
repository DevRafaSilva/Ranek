export default class loginAutomatico {
  constructor(objUsuario) {
    this.objUsuario = objUsuario;
  }

  async loginAutomatico() {
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.objUsuario),
      },
    );

    const dados = await response.json();

    window.localStorage.setItem('token', dados.token);
    window.localStorage.setItem('user_email', dados.user_email);
    console.log('dadosAutomatioc', dados);
    console.log(dados);
    window.localStorage.setItem('nome', dados.user_display_name);
    if (dados.token) {
      window.location.href = '/code/html/conta.html';
    }
  }

  init() {
    this.loginAutomatico();
  }
}
