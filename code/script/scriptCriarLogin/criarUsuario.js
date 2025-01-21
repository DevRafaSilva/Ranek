import loginAutomatico from './loginAutomatico.js';
export default class CriarUsuario {
  constructor(
    dataEmail,
    dataSenha,
    dataCep,
    dataRua,
    dataNumero,
    dataBairro,
    dataCidade,
    dataEstado,
    dataBtnCriar,
    dataErro,
    dataNome,
  ) {
    this.dataEmail = document.querySelector(dataEmail);
    this.dataSenha = document.querySelector(dataSenha);
    this.dataCep = document.querySelector(dataCep);
    this.dataRua = document.querySelector(dataRua);
    this.dataNumero = document.querySelector(dataNumero);
    this.dataBairro = document.querySelector(dataBairro);
    this.dataCidade = document.querySelector(dataCidade);
    this.dataEstado = document.querySelector(dataEstado);
    this.dataBtnCriar = document.querySelector(dataBtnCriar);
    this.dataErro = document.querySelector(dataErro);
    this.dataNome = document.querySelector(dataNome);
  }

  pegarDadosCriar(event) {
    event.preventDefault();

    const objetoDadosCriar = {
      email: this.dataEmail.value,
      senha: this.dataSenha.value,
      cep: this.dataCep.value,
      rua: this.dataRua.value,
      numero: this.dataNumero.value,
      bairro: this.dataBairro.value,
      cidade: this.dataCidade.value,
      estado: this.dataEstado.value,
      nome: this.dataNome.value,
    };
    console.log(objetoDadosCriar);

    this.fetchCriar(objetoDadosCriar, event);
  }

  async fetchCriar(objetoDados, event) {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/usuario',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(objetoDados),
        },
      );
      const dados = await response.json();
      console.log(dados);
      if (dados.data && dados.data.status === 403) {
        this.dataErro.innerText = dados.message;
        throw new Error(dados.message);
      }
      const dadosObj = {
        username: this.dataEmail.value,
        password: this.dataSenha.value,
      };
      const automaticoLogin = new loginAutomatico(dadosObj);
      automaticoLogin.init();
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  init() {
    this.dataBtnCriar.addEventListener('click', (event) => {
      event.preventDefault();
      this.pegarDadosCriar(event);
    });
  }
}
