export default class pegarUsuario {
  constructor(inputDados) {
    this.inputDados = document.querySelectorAll(inputDados);
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

    this.inputDados[0].value = dados.nome ? dados.nome : '';
    this.inputDados[1].value = dados.email ? dados.email : '';
    this.inputDados[2].value = dados.senha ? dados.senha : '';
    this.inputDados[3].value = dados.cep ? dados.cep : '';
    this.inputDados[4].value = dados.rua ? dados.rua : '';
    this.inputDados[5].value = dados.numero ? dados.numero : '';
    this.inputDados[6].value = dados.bairro ? dados.bairro : '';
    this.inputDados[7].value = dados.cidade ? dados.cidade : '';
    this.inputDados[8].value = dados.estado ? dados.estado : '';
    console.log(dados);
  }

  init() {
    this.pegarDados();
    console.log(this.inputDados);
  }
}
