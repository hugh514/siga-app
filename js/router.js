// router.js
const routes = {
    '': '/views/create-account/login.html',
    '#login': '/views/create-account/login.html',
    '#create_account': '/views/create-account/create_account.html',
    '#create_password': '/views/create-account/create_password.html',

    '#cadastro_diciplina':'/views/diciplina/cadastro_diciplina.html',
    '#diciplina': '/views/diciplina/diciplina.html',
    '#editar_diciplina': '/views/diciplina/editar_diciplina.html',

    '#turmas': '/views/turmas/turmas.html',

    '#diario': '/views/diario/diario.html',

    '#professores': '/views/professores/professores.html',
    
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