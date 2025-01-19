export default class pesquisarFecth {
  constructor(dataInputPesquisa) {
    this.dataInputPesquisa = document.querySelector(dataInputPesquisa);
  }

  async pesquisar() {
    console.log(this.dataInputPesquisa.value);
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto?q=${this.dataInputPesquisa.value}`,
      );
      const dados = await response.json();
      console.log(dados);

      return dados;
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  init() {
    window.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') this.pesquisar();
    });
  }
}
