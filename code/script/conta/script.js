import PostProduto from './postProduto.js';
import pegarProdutosUsuario from './pegarProdutosUsuario.js';

const postar = new PostProduto(
  '[data-post-nome]',
  '[data-post-preco]',
  '[data-post-file]',
  '[data-post-descricao]',
  '[data-post-btn]',
);

postar.init();

const pegarProdutos = new pegarProdutosUsuario('[data-produtos-usuario]');
pegarProdutos.init();
