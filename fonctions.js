/**
 *  FONCTION.JS
 * @Description : Les fonctions appelées par le portfolio. Scope non défini pour le moment hihi
 * @Date :
 * @Auteur : Elsa LAVERGNE (Shaggy)
 */

function initCarrousel(){
    const swiperVideo = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initCarrousel();
});