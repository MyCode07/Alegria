import { Swiper, FreeMode, Thumbs, Manipulation, Mousewheel, Lazy, Pagination } from "swiper";

const heroslider = document.querySelector('.hero .swiper');
if (heroslider) {
    new Swiper(heroslider, {
        modules: [
            Pagination
        ],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: ".hero-slider-pagintion",
            type: "fraction",
        }
    })
}