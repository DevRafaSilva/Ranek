export default class logout {
  constructor(logout) {
    this.logout = document.querySelectorAll(logout);
  }

  fazerLogout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('nome');
    window.location.href = '/code/html/login.html';
  }

  init() {
    this.logout.forEach((item) => {
      item.addEventListener('click', () => {
        this.fazerLogout();
      });
    });
  }
}
