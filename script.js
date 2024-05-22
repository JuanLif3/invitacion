
      const validUsers = [
        {
          usuario: "usuario1",
          contraseña: "password1",
          pagina: "bienvenido_usuario1.html",
        },
        {
          usuario: "usuario2",
          contraseña: "password2",
          pagina: "bienvenido_usuario2.html",
        },
      ];

      document
        .getElementById("loginForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const usuario = document.getElementById("usuario").value;
          const contraseña = document.getElementById("contraseña").value;
          const user = validUsers.find(
            (user) => user.usuario === usuario && user.contraseña === contraseña
          );

          if (user) {
            window.location.href = user.pagina;
          } else {
            document.getElementById("error").textContent =
              "Usuario o contraseña incorrecta";
          }
        });
