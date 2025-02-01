export default class fazerCompra {
  constructor(btnComprar, endereco) {
    this.btnComprar = document.querySelector(btnComprar);
    this.endereco = document.querySelectorAll(endereco);
  }

  async pegarProduto() {
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${window.localStorage.getItem(
          'id',
        )}`,
      );
      const dados = await response.json();
      if (!!dados.id) {
        window.location.href = '/code/html/compras.html';
      }
      const [cep, rua, estado, cidade, bairro, numero] = this.endereco;
      const enderecoObj = {
        cep: cep.value,
        rua: rua.value,
        estado: estado.value,
        cidade: cidade.value,
        bairro: bairro.value,
        numero: numero.value,
      };
      this.pegarDados(
        dados.usuario_id,
        dados,
        window.localStorage.getItem('user_email'),
        enderecoObj,
      );
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  pegarDados(vendedorId, produtoId, comprador, enderecoObj) {
    const objDados = {
      vendedor_id: vendedorId,
      produto: produtoId,
      comprador_id: comprador,
      endereco: enderecoObj,
    };
    this.comprar(objDados);
  }

  async comprar(objDados) {
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/transacao',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
        body: JSON.stringify(objDados),
      },
    );
    const dados = await response.json();
  }

  inti() {
    this.btnComprar.addEventListener('click', () => {
      this.pegarProduto();
    });
  }
}
