export default class pegarUsuario {
  constructor(inputDados) {
    this.inputDados = document?.querySelectorAll(inputDados);
  }

  async pegarDados() {
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

    this.inputDados.forEach((item) => {
      item.value !== undefined;

      this.inputDados[0].value = dados.nome ? dados.nome : '';
      this.inputDados[0].value = dados.email ? dados.email : '';
      this.inputDados[0].value = dados.senha ? dados.senha : '';
      this.inputDados[0].value = dados.cep ? dados.cep : '';
      this.inputDados[0].value = dados.rua ? dados.rua : '';
      this.inputDados[0].value = dados.numero ? dados.numero : '';
      this.inputDados[0].value = dados.bairro ? dados.bairro : '';
      this.inputDados[0].value = dados.cidade ? dados.cidade : '';
      this.inputDados[0].value = dados.estado ? dados.estado : '';
    });
  }

  init() {
    if (window.location.href === '/code/html/editarUsuario.html')
      this.pegarDados();

  }
}