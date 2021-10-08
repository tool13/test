const popup = document.querySelector('.js-popup');

function showPopup() {
    popup.classList.add('visible');
}

function hidePopup() {
    popup.classList.remove('visible');
}

export {showPopup, hidePopup};