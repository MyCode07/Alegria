const parallaxElements = document.querySelectorAll('[data-parallax]');
const parallax = elements => {
    if (!parallaxElements.length || window.innerWidth < 600) return;

    elements.forEach(element => {
        let y = window.innerHeight - element.getBoundingClientRect().top
        let parallax = +element.dataset.parallax ? +element.dataset.parallax : -0.1;
        if (y > 0) {
            element.style.top = parallax * y + 'px';
        }
    })
}

parallax(parallaxElements)
window.addEventListener('scroll', () => {
    parallax(parallaxElements)
})


const villaContent = document.querySelector('.villa__content-body');

const setTicky = () => {
    if (!villaContent || window.innerWidth < 1024) return;
    const top = window.innerHeight - villaContent.getBoundingClientRect().height;

    if (top < 0) villaContent.style.top = top - 60 + 'px'
}

setTicky()