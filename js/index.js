document.addEventListener('DOMContentLoaded', () => {
    // Asegúrate de que Swiper.js esté correctamente inicializado
    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.custom-next', // Botón personalizado "siguiente"
            prevEl: '.custom-prev', // Botón personalizado "anterior"
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true, // Opcional: para que el carrusel sea cíclico
    });
});