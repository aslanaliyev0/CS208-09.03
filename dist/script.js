function isStrongPassword(password) {
    if (password.length < 8) return false;
    if (password.toLowerCase().includes("password")) return false;
    if (!/[A-Z]/.test(password)) return false;
    return true;

    
}
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
    
  
  const pass = document.getElementById("password").value;
  if (isStrongPassword(pass)) {
    alert("Password is strong");
  } else {
    alert("Password is weak");
  }
}
);