import getProdutos from './getProdutos.js';
const getProdutosVar = new getProdutos(
  '[data-produtos]',
  '[data-paginacao]',
  '[data-ant]',
  '[data-prox]',
  '[data-loading]',
);
getProdutosVar.init();
