document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Ganti ini dengan username/password kamu sendiri
  const validUsername = "admin@gmail.com";
  const validPassword = "admin"; 

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("error-message").innerText = "Username atau password salah!";
  }
  
});
