let slideIndex = 1;
showSlides(slideIndex);

// Cambia slide quando si clicca su avanti/indietro
function changeSlide(n) {
  showSlides((slideIndex += n));
}

// Mostra una slide specifica quando si clicca su un punto
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  // Loop degli indici
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Nascondi tutte le slide e rimuovi la classe "active" dai punti
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Mostra la slide attuale e attiva il punto corrispondente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
