export default class formatarMoeda {
  constructor(preco) {
    this.preco = preco;
  }

  formatar() {
    let precoLet = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.preco);


    return precoLet;
  }

  init() {
    this.formatar();
  }
}
