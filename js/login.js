
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function () {

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPass').value;
  const loginError = document.getElementById('loginError');
  const loginSuccess = document.getElementById("loginSuccess");


  if (!email && !password) {
    loginError.textContent = 'Please fill the inputs.';
    return false;
  } else if (!email) {
    loginError.textContent = 'Please Type Ur Email.';
    return false;
  } else if (!password) {
    loginError.textContent = 'Please Type Ur Password.';
    return false;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    loginError.textContent = 'Invalid email format.';
    return false;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.email === email);

  if (!user) {
    loginError.textContent = 'Email not registered, Signup.';
    return false;
  }

  if (user.password !== password) {
    loginError.textContent = 'Incorrect password.';
    return false;
  }

  if (users) {
    loginSuccess.textContent = "Login Successfully";
  }

  setTimeout(() => {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = 'home.html';
  }, 1500);


});


let emailInput = document.getElementById("loginEmail");
let passInput = document.getElementById("loginPass");

let signinInputs = [emailInput, passInput];

signinInputs.forEach(function (e) {
  e.addEventListener("keydown", function () {
    loginError.textContent = null;
  });
});