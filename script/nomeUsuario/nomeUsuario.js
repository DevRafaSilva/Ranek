export default class nomeUsuario {
  constructor(dataLink) {
    this.dataLink = document.querySelector(dataLink);
  }

  pegarNomeUsuario() {
    if (
      window.localStorage.getItem('token') !== 'undefined' &&
      window.localStorage.getItem('token') != null
    ) {
      this.dataLink.innerText = window.localStorage.getItem('nome');
    } else {
      this.dataLink.innerText = 'Vender / Login';
    }
  }

  init() {
    this.pegarNomeUsuario();
  }
}
