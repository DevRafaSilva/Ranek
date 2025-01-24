import linkMudar from './linkMudar.js';
import rotaProtegida from './rotaProtegida.js';

const link = new linkMudar('[data-link]');
link.init();
const rota = new rotaProtegida();
rota.init();
