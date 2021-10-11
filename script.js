const progress = document.querySelector('.progress');
const volumeProgress = document.querySelector('.volume-progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

volumeProgress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

const btnFormOpen = document.querySelector('.buy-button');
const btnFormClose = document.querySelector('.form-close');
const form = document.querySelector('.tickets-form');
const overlay = document.querySelector('.overlay');

btnFormOpen.addEventListener('click',(e) => {
  form.classList.add('form-opened');
  overlay.classList.add('overlay-opened');
})

btnFormClose.addEventListener('click',(e) => {
  form.classList.remove('form-opened');
  overlay.classList.remove('overlay-opened');
})

overlay.addEventListener('click',(e) => {
  form.classList.remove('form-opened');
  overlay.classList.remove('overlay-opened');