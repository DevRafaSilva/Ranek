export default class RequisicaoCep {
  constructor(cep, rua, bairro, cidade, estado) {
    this.cep = document.querySelector(cep);
    this.rua = document.querySelector(rua);
    this.bairro = document.querySelector(bairro);
    this.cidade = document.querySelector(cidade);
    this.estado = document.querySelector(estado);
  }

  async fetchCep() {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${this.cep.value}/json`,
      );
      const dados = await response.json();
      console.log(dados);
      this.bairro.value = dados.localidade;
      this.cidade.value = dados.bairro;
      this.rua.value = dados.logradouro;
      this.estado.value = dados.estado;
    } catch (err) {
      console.log(err);
    }
  }

  init() {
    this.cep.addEventListener('change', () => {
      this.fetchCep();
    });
  }
}
