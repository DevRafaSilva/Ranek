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
    console.log('dadosAutomatioc', dados);
  }

  init() {
    this.loginAutomatico();
  }
}
