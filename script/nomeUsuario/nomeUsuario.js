export default class nomeUsuario {
  constructor(dataLink) {
    this.dataLink = document.querySelectorAll(dataLink);
  }

  pegarNomeUsuario() {
    if (window.localStorage.getItem('token') !== 'undefined') {
      this.dataLink[0].innerText = window.localStorage.getItem('nome');
    }
  }

  init() {
    this.pegarNomeUsuario();
  }
}
