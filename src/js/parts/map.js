const locationsMap = document.querySelector('.location-map__content');
const locations = document.querySelectorAll('.loc-item');

if (locationsMap && window.innerWidth <= 600)
    locationsMap.scrollTo(270, 0)


const babl = document.querySelector('.babl2');
if (locations.length)
    locations.forEach(item => {
        const open = item.querySelector('.loc-item__icon');
        const close = babl.querySelector('.babl-close');

        const text = item.querySelector('p').innerHTML;
        const title = item.querySelector('span').innerHTML;

        open.addEventListener('click', (e) => {
            const coords = getWindowRelativeOffset(document.querySelector('.location-map__content'), item);
            console.log();

            babl.querySelector('p').innerHTML = text;
            babl.querySelector('h4').innerHTML = title;

            babl.classList.add('_active')
            babl.style.left = coords.left + locationsMap.scrollLeft + 'px';
            babl.style.bottom = coords.bottom + 'px';
        })

        close.addEventListener('click', (e) => {
            babl.classList.remove('_active')
        })
    })



document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_btn-back')) {
        e.preventDefault()
        window.history.back()
    }
})

function getWindowRelativeOffset(parent, elem) {

    let left = elem.getBoundingClientRect().left - parent.getBoundingClientRect().left + elem.getBoundingClientRect().width / 2;
    let top = elem.getBoundingClientRect().top - parent.getBoundingClientRect().top - elem.getBoundingClientRect().height;
    let bottom = parent.getBoundingClientRect().bottom - elem.getBoundingClientRect().bottom + elem.getBoundingClientRect().height;


    return {
        left,
        top,
        bottom
    };
};