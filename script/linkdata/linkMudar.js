export default class linkMudar {
  constructor(dataLink) {
    this.dataLink = document.querySelectorAll(dataLink);
  }

  mudarLink() {
    if (typeof window.localStorage.getItem('token') === 'undefined') {
      this.dataLink[0].setAttribute('href', '/code/html/login.html');
      this.dataLink[0].innerText = 'Vender / Login';
    } else {
      this.dataLink[0].setAttribute('href', '/code/html/login.html');
    }
  }

  init() {
    this.mudarLink();
    console.log(this.dataLink);
  }
}
