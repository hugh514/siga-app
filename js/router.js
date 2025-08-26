// router.js
const routes = {
    '': '/views/login.html',
    '#login': '/views/login.html',
    '#create_account': '/views/create_account.html',
    '#create_password': '/views/create_password.html',
    '#relatorios': '/views/relatorios.html',
    '#home-app' : '/views/home-app.html',
  };
  
  async function loadPage() {
    const path = routes[location.hash] || routes[''];
    
    try {
      const response = await fetch(path);
      const html = await response.text();
      document.getElementById('app').innerHTML = html;
    } catch (err) {
      document.getElementById('app').innerHTML = `<div class="alert alert-danger">Erro ao carregar a página.</div>`;
      console.error('Router error:', err);
    }
  }
  
  export default { loadPage };
  