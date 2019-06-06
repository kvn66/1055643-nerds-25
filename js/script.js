var popup = document.querySelector('.modal-write-us');
var overlay = document.querySelector('.overlay');
var openPopupButton = document.querySelector('.modal-write-us-open');
var closePopupButton = popup.querySelector('.modal-write-us-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.add('modal--show');
  popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  overlay.classList.remove('modal--show');
  popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    overlay.classList.remove('modal--show');
    popup.classList.remove('modal--show');
  }
});
