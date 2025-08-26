// router.js
const routes = {
  '': '/views/login.html',
  '#login': '/views/login.html',
  '#create_account': '/views/create_account.html',
  '#create_password': '/views/create_password.html',
  '#relatorios': '/views/relatorios.html',
  '#side_bar': '/views/side.html',
  '#home-app' : '/views/home-app.html',
};

async function loadPage() {
  const path = routes[location.hash] || routes[''];

  try {
    const response = await fetch(path);
    const html = await response.text();
    document.getElementById('app').innerHTML = html;

    // 🔹 Sidebar control
    const sidebar = document.getElementById('sidebar');
    if (
      location.hash === '#login' ||
      location.hash === '' ||
      location.hash === '#create_account' ||
      location.hash === '#create_password'
    ) {
      sidebar.style.display = 'none';
    } else {
      sidebar.style.display = 'block';

    }

  } catch (err) {
    document.getElementById('app').innerHTML = `
      <div class="alert alert-danger">Erro ao carregar a página.</div>`;
    console.error('Router error:', err);
  }
}

export default { loadPage };