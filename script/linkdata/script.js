import linkMudar from './linkMudar.js';
import rotaProtegida from './rotaProtegida.js';
import logout from './logout.js';

const link = new linkMudar('[data-link]');
link.init();
const rota = new rotaProtegida();
rota.init();

const logoutLogin = new logout('[data-logout]');
logoutLogin.init();
