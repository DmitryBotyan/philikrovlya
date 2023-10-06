const overlay = document.querySelector('.overlay')
const overlayContainer = document.querySelector('.overlay__container')
const hamburger = document.querySelector('.header__hamburger')
const overlayCloseButton = document.querySelector('.overlay__close')

hamburger.addEventListener('click', () => {
    overlay.classList.add('overlay_opened')
})

overlayCloseButton.addEventListener('click', () => {
    overlay.classList.remove('overlay_opened')
})

overlay.addEventListener('click', (evt) => {
    if (evt.target == overlay) {
        overlay.classList.remove('overlay_opened')
    }
})