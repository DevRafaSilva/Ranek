export default class abrirFormulario {
  constructor(btnAbrir, formularioAbrir) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.formularioAbrir = document.querySelector(formularioAbrir);
  }

  abrirFormulario() {
    this.formularioAbrir.classList.add('open');
    this.btnAbrir.classList.add('closed');
  }

  init() {
    this.btnAbrir.addEventListener('click', () => {
      this.abrirFormulario();
    });
  }
}
