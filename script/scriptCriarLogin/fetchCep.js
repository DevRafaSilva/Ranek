export default class RequisicaoCep {
  constructor(cep, rua, bairro, cidade, estado) {
    this.cep = document.querySelectorAll(cep);
    this.rua = document.querySelectorAll(rua);
    this.bairro = document.querySelectorAll(bairro);
    this.cidade = document.querySelectorAll(cidade);
    this.estado = document.querySelectorAll(estado);
  }

  async fetchCep() {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${this.cep[0].value}/json`,
      );
      const dados = await response.json();
      console.log(dados);
      this.bairro[0].value = dados.bairro;
      this.cidade[0].value = dados.localidade;
      this.rua[0].value = dados.logradouro;
      this.estado[0].value = dados.estado;
    } catch (err) {
      console.log(err);
    }
  }

  init() {
    this.cep[0].addEventListener('change', () => {
      this.fetchCep();
    });
  }
}
