let menuVisible = false;

//esto oculta y muestra el menu del portafolio

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

//y esta funcion cuando seleccionas algo del menu se cierra

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// LOADER 
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 2000); 
});

