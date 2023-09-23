const locationsMap = document.querySelector('.location-map__content');
const locations = document.querySelectorAll('.location-map__icons button');

if (locationsMap && window.innerWidth <= 600)
    locationsMap.scrollTo(200, 0)

if (locations.length)
    locations.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e);
        })
    })