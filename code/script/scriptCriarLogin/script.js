import abrirFormulario from './abrirFormulario.js';
import CriarUsuario from './criarUsuario.js';
import usuarioLogin from './loginUsuario.js';

const abrir = new abrirFormulario(
  '[data-btn-formulario-criar]',
  '[data-formulario-criar]',
);
abrir.init();

const criar = new CriarUsuario(
  '[data-email]',
  '[data-senha]',
  '[data-cep]',
  '[data-rua]',
  '[data-numero]',
  '[data-bairro]',
  '[data-cidade]',
  '[data-estado]',
  '[data-btn-criar]',
  '[data-error]',
  '[data-nome]',
);

criar.init();

const login = new usuarioLogin(
  '[data-email-login]',
  '[data-senha-login]',
  '[data-btn-login]',
  '[data-erro-login]',
);

login.init();
