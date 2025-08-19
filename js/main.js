// main.js
import router from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicia a aplicação carregando a rota atual
  router.loadPage();

  // Sempre que o hash da URL mudar, recarrega a rota
  window.addEventListener('hashchange', () => {
    router.loadPage();
  });
});
