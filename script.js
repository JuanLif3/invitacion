const validUsers = [
  { usuario: "vicente", contraseña: "password1", pagina: "vicente.html" },
  { usuario: "camilo", contraseña: "password2", pagina: "camilo.html" },
  { usuario: "cristobal", contraseña: "password3", pagina: "cristobal.html" },
  { usuario: "jose", contraseña: "password4", pagina: "jose.html" },
  { usuario: "CyJ", contraseña: "password5", pagina: "CyJ.html" },
  { usuario: "JyV", contraseña: "password6", pagina: "JyV.html" },
  { usuario: "VyV", contraseña: "password7", pagina: "VyV.html" },
  { usuario: "moises", contraseña: "password8", pagina: "moises.html" },
  { usuario: "sae", contraseña: "bluey", pagina: "karla.html" },
  { usuario: "anais", contraseña: "password10", pagina: "anais.html" },
  { usuario: "marc", contraseña: "password10", pagina: "marc.html" },
  { usuario: "pedro", contraseña: "password11", pagina: "pedro.html" }
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
