export default class inputValor {
  constructor(input, label) {
    this.input = input;
    this.label = label;
  }

  pegarValorInput() {
    if (this.input.length >= 9 && this.input.length >= 9) {
      const arrayInput = Array.from(this.input);
      const arrayLabel = Array.from(this.label);
      const filtrar = arrayInput.filter((item) => item.value !== '');
      filtrar.forEach((item) => {
        const labelFiltrar = arrayLabel.filter((label) => {
          return label.getAttribute('for') == item.getAttribute('name');
        });
        console.log(labelFiltrar);
        labelFiltrar.forEach((itemLabel) => {
          itemLabel.style.display = 'none';
        });
        item.style.display = 'none';
      });
    }
  }

  init() {
    this.pegarValorInput();
  }
}
