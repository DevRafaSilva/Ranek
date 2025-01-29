export default class formularioAbrir {
  constructor(dataBtn, dataFormulario, dataBtnCriar, dataFormularioCriar) {
    this.dataBtn = dataBtn;
    this.dataFormulario = dataFormulario;
    this.dataBtnCriar = document.querySelector(dataBtnCriar);
    this.dataFormularioCriar = document.querySelector(dataFormularioCriar);
  }

  abrirFormulario(event) {
    event.preventDefault();
    this.dataFormulario.classList.add('open');
  }

  init() {
    this.dataBtn.addEventListener('click', (event) => {
      this.abrirFormulario(event);
    });

    console.log(this.dataBtnCriar);
  }
}
