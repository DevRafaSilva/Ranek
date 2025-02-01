export default class tituloPagina {
  constructor() {}

  titulo() {
    const href = window.location.pathname;
    switch (href) {
      case '/code/html/conta.html': {
        document.title += ' | ' + 'POSTAR';
        break;
      }
      case '/code/html/compras.html': {
        document.title += ' | ' + 'COMPRAS';
        break;
      }
      case '/code/html/vendas.html': {
        document.title += ' | ' + 'VENDAS';
        break;
      }
      case '/code/html/editarUsuario.html': {
        document.title += ' | ' + 'DADOS';
        break;
      }
      case '/code/html/produto.html': {
        document.title += ' | ' + window.localStorage.getItem('id');
        break;
      }
    }
  }

  init() {
    this.titulo();
  }
}
