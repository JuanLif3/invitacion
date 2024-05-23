const validUsers = [
  { usuario: "vicente", contraseña: "tonoto", pagina: "5436.html" },
  { usuario: "camilo", contraseña: "tonotobici", pagina: "3434.html" },
  { usuario: "cristobal", contraseña: "sociogay", pagina: "4335.html" },
  { usuario: "jose", contraseña: "jose", pagina: "jose.html" },
  { usuario: "CyJ", contraseña: "contraseña1", pagina: "CyJ.html" },
  { usuario: "Turro", contraseña: "turrin", pagina: "JyV.html" },
  { usuario: "VyV", contraseña: "password7", pagina: "VyV.html" },
  { usuario: "moises", contraseña: "wasaaa", pagina: "moises.html" },
  { usuario: "sae", contraseña: "bluey", pagina: "karla.html" },
  { usuario: "anais", contraseña: "soyesa", pagina: "anais.html" },
  { usuario: "marc", contraseña: "gatosmiau", pagina: "4575.html" },
  { usuario: "Nacho", contraseña: "contraseña", pagina: "nacho.html" },
  { usuario: "pedro", contraseña: "peljume", pagina: "6753.html" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;
  const user = validUsers.find(user => user.usuario === usuario && user.contraseña === contraseña);
  
  if (user) {
    window.location.href = user.pagina;
  } else {
    document.getElementById('error').textContent = "Usuario o contraseña incorrecta";
  }
});
