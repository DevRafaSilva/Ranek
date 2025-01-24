import PostProduto from './postProduto.js';
import pegarProdutosUsuario from './pegarProdutosUsuario.js';
import pegarUsuario from './pegarDadosUsuario.js';
import atualizarUsuario from './atualizarUsuario.js';

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

const pegarDados = new pegarUsuario('[data-dados]');
pegarDados.init();

const atualizar = new atualizarUsuario('[data-dados]', '[data-atulaizar-btn]');
atualizar.init();
