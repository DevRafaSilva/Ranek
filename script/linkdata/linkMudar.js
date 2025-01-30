export default class linkMudar {
  constructor(dataLink) {
    this.dataLink = document.querySelectorAll(dataLink);
  }

  mudarLink() {
    this.dataLink.forEach((item) => {
      if (window.localStorage.getItem('token')) {
        item.setAttribute('href', '/code/html/conta.html');
      } else {
        item.setAttribute('href', '/code/html/login.html');
        item.innerText = 'Vender / Login';
      }
    });
  }

  init() {
    this.mudarLink();
    console.log(this.dataLink);
  }
}
