/**
 *  FONCTION.JS
 * @Description : Les fonctions appelées par le portfolio. Scope non défini pour le moment hihi
 * @Date :
 * @Auteur : Elsa LAVERGNE (Shaggy)
 */

function initCarrousel(){
    const swiperVideo = new Swiper('.swiper', {
        slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initCarrousel();
});

function printTextBelow() {
    document.getElementsByClassName('')
}

/**
 * Pour ouvrir le cv mais ça fait chier
 */
function openCV() {
    document.getElementById('cv-modal').style.display = 'flex';
}

function closeCV() {
    document.getElementById('cv-modal').style.display = 'none';
}

function showDescription(id) {
  // Masquer tous les textes explicatifs
  let allExplanationText = document.getElementsByClassName('projets-description-projet-text');
  for (let i = 0; i < allExplanationText.length; i++) {
      allExplanationText[i].style.display = 'none';
  }

  // Afficher le texte explicatif spécifique
  let texteExplicatif = document.getElementById(id);
  if (texteExplicatif) {
      texteExplicatif.style.display = 'block';
  }
}