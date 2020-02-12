import './css/application.scss';

(() => {
  let eventCards = document.querySelectorAll('.event-card');
  eventCards.forEach(card => card.addEventListener('click', () => {
    window.location.replace('event.html');
  }));
})()