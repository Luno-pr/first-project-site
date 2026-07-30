const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination' },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    autoplay: { delay: 3000 },
    slidesPerView: 1
});