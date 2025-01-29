export default class RequisicaoCep {
  constructor(cep, rua, bairro, cidade, estado, cepAtualizar) {
    this.cep = document.querySelector(cep);
    this.rua = document.querySelectorAll(rua);
    this.bairro = document.querySelectorAll(bairro);
    this.cidade = document.querySelectorAll(cidade);
    this.estado = document.querySelectorAll(estado);
    this.dataCepAtualziar = document.querySelector(cepAtualizar);
  }

  async fetchCep() {
    let dadosVariavel = [];
    if (window.location.href === 'http://127.0.0.1:5500/code/html/login.html') {
      console.log(this.cep.value);
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${this.cep.value}/json`,
        );
        const dados = await response.json();
        dadosVariavel = dados;
      } catch (err) {
        console.log(err);
      }
    } else if (
      window.location.href ===
      'http://127.0.0.1:5500/code/html/editarUsuario.html'
    ) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${this.dataCepAtualziar.value}/json`,
        );
        const dados = await response.json();
        dadosVariavel = dados;
      } catch (err) {
        console.log(err);
      }
    }
    this.bairro[0].value = dadosVariavel.localidade;
    this.cidade[0].value = dadosVariavel.bairro;
    this.rua[0].value = dadosVariavel.logradouro;
    this.estado[0].value = dadosVariavel.estado;
  }

  init() {
    this.cep?.addEventListener('change', () => {
      this.fetchCep();
    });
    this.dataCepAtualziar?.addEventListener('change', () => {
      this.fetchCep();
    });
  }
}
