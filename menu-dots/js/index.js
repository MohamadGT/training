(() => {
  let isMenuToggled = false;
  let threeDotsElement = document.querySelector('.js-three-dots');
  let itemsElement = document.querySelector('.js-items');
  document.querySelector('.js-menu').addEventListener('click', () => {
    isMenuToggled = !isMenuToggled;
    if (isMenuToggled) {
      threeDotsElement.classList.add('js-three-dots__animation');
      itemsElement.classList.add('js-items__animation');
    } else {
      threeDotsElement.classList.remove('js-three-dots__animation');
      itemsElement.classList.remove('js-items__animation');
    }
  })
})()