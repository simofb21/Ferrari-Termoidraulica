// Seleziona gli elementi necessari dal DOM
const hamburger = document.querySelector('.hamburger'); // Assicurati che l'elemento hamburger esista
const navMenu = document.querySelector('.nav-menu'); // Assicurati che l'elemento navMenu esista

// Aggiungi un event listener al pulsante hamburger per gestire il click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Disabilita lo scroll della pagina quando il menu è attivo
  document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
});

// Aggiungi un event listener a ciascun link di navigazione per chiudere il menu quando un link viene cliccato
document.querySelectorAll(".nav-link").forEach(n => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
