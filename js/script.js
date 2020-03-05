var modal = document.querySelector('.search-hotel-modal');
var open = document.querySelector('.search-button');
console.log(modal);

open.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.toggle('visually-hidden');
});