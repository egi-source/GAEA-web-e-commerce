document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validUsername = "admin@gmail.com";
  const validPassword = "admin"; 


// Perubahan kecil oleh Guntur Purnama


   

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("error-message").innerText = "Username atau password salah!";
  }
  
});
