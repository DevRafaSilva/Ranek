export default class rotaProtegida {
  constructor() {}

  protegerRota() {
    if (
      window.localStorage.getItem('token') &&
      window.location.href.includes('/login')
    ) {
      window.location.href = '/code/html/conta.html';
    } else if (
      window.localStorage.getItem('token') == null &&
      window.location.href.includes('/conta')
    ) {
      window.location.href = '/code/html/login.html';
    }
  }

  init() {
    this.protegerRota();
  }
}
