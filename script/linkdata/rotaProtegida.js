export default class rotaProtegida {
  constructor() {}

  protegerRota() {
    const verificar =
      window.localStorage.getItem('token') &&
      window.localStorage.getItem('token') !== 'undefined';
    if (!verificar && window.location.pathname.includes('/conta')) {
      window.location.href = '/code/html/login.html';
    } else if (verificar && window.location.pathname.includes('/login')) {
      window.location.href = '/code/html/conta.html';
    }
  }

  init() {
    this.protegerRota();
  }
}
