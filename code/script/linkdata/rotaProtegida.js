export default class rotaProtegida {
  constructor() {}

  protegerRota() {
    if (
      window.localStorage.getItem('token') &&
      window.location.href.includes('/login')
    ) {
      window.location.href = '/code/html/conta.html';
    }
  }

  init() {
    this.protegerRota();
  }
}
