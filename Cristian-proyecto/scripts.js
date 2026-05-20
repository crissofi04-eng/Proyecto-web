const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.style.transition =
    "transform 0.4s ease-in-out, opacity 0.4s ease-in-out, visibility 0.4s ease-in-out";
  nav.classList.remove("visible");
});

var enlacesMenu = document.querySelectorAll(".cabecera-menu a");

for (var i = 0; i < enlacesMenu.length; i++) {
  enlacesMenu[i].onclick = function () {
    var menu = document.querySelector(".menu");
    if (menu) {
      menu.classList.remove("visible");
    }
  };
}
