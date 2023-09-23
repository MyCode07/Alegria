import gsap from 'gsap'

const observer = new IntersectionObserver((entries, self) => {
    let targets = entries
        .map(entry => {
            if (entry.isIntersecting) {
                self.unobserve(entry.target)
                return entry.target;
            }
        })
        .filter(item => item != undefined);

    animate(targets)
});

function animate(elem) {
    if (elem) {
        gsap.to(elem, {
            opacity: 1,
            duration: 1,
            x: 0,
            y: 0,
            ease: 'ease',
            stagger: 0.3
        });
    }
}

const animateElems = document.querySelectorAll('[data-animate]');

export const animations = () => {
    if (!animateElems.length) return

    animateElems.forEach(elem => {
        observer.observe(elem);
    })
}


const observerImages = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_remove');
        }
    })
});

const animateImages = document.querySelectorAll('[data-hidden]');

export const imageAnimation = () => {
    if (!animateImages.length) return
    
    animateImages.forEach(elem => {
        observerImages.observe(elem);
    })
}

