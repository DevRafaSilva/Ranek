import PostProduto from './postProduto.js';

const postar = new PostProduto(
  '[data-post-nome]',
  '[data-post-preco]',
  '[data-post-file]',
  '[data-post-descricao]',
  '[data-post-btn]',
);

postar.init();
