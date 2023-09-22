
const locationsMap = document.querySelector('.location-map');

if (window.innerWidth <= 600) {
    locationsMap.scrollTo(200, 0)
}

const locations = locationsMap.querySelectorAll('button');

if (locations.length) {
    locations.forEach(item => {
        item.addEventListener('click', () => {

        })
    })
}

export const map = () => {

}