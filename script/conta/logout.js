export default class logoutConta {
  constructor(btnLogout) {
    this.btnLogout = document.querySelectorAll(btnLogout);
  }

  fazerLogout() {
    window.localStorage.removeItem('token');
    window.location.href = '/code/html/login.html';
  }

  init() {
    this.btnLogout.forEach((item) => {
      item.addEventListener('click', () => {
        this.fazerLogout();
      });
    });
  }
}
