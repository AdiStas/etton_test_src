'use strict';

const sliderItemToggle = document.querySelectorAll('.slider-item__toggle');
const sliderListWrapper = document.querySelector('.campaign__list');

for (const element of sliderItemToggle) {
    element.addEventListener('click', onClickToggleHandler);
}

function onClickToggleHandler(event) {
  let target = event.target;
    for (const element of sliderItemToggle) {
        element.classList.remove('slider-item__toggle--active');
    };
    if (target.classList !== 'slider-item__toggle--active') {
        this.classList.add('slider-item__toggle--active');
    }

    switch (target.id) {
        case 'toggle-1':
            sliderListWrapper.style.left = 0;
            break;
        case 'toggle-2':
            sliderListWrapper.style.left = '-100%';
            break;
        case 'toggle-3':
            sliderListWrapper.style.left = '-200%';
            break;    
        default:
            sliderListWrapper.style.left = 0;
            break;
    }
};