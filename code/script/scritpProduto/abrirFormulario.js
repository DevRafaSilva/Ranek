export default class formularioAbrir {
  constructor(dataBtn, dataFormulario) {
    this.dataBtn = dataBtn;
    this.dataFormulario = dataFormulario;
  }

  abrirFormulario(event) {
    event.preventDefault();
    this.dataFormulario.classList.add('open');
  }

  init() {
    console.log(this.dataBtn);
    console.log(this.dataFormulario);
    this.dataBtn.addEventListener('click', (event) => {
      this.abrirFormulario(event);
    });
  }
}
