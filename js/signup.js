document.getElementById('signupBtn').addEventListener('click', function () {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPass').value;
  const signupError = document.getElementById('signupError');

  if (!name || !email || !password) {
    signupError.textContent = 'All fields are required.';
    return;
  }

  const nameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  if (!nameRegex.test(name)) {
    signupError.textContent = 'Invalid username format. Use 3-20 characters, letters, numbers, and underscores only.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    signupError.textContent = 'Invalid email format.';
    return;
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    signupError.textContent = 'Invalid password format. Minimum eight characters, at least one letter and one number.';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.some(user => user.email === email)) {
    signupError.textContent = 'Email is already registered.';
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  window.location.href = 'index.html';
});

