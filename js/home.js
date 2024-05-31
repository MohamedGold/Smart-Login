window.onload = function () {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser) {
    window.location.href = 'login.html';
    return false;
  }

  const welcomeMessage = document.getElementById('welcomeMessage');

  welcomeMessage.innerHTML = `Welcome,  <span class="text-info">${loggedInUser.name}</span>`;

  document.getElementById('logoutBtn').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
  });
};

