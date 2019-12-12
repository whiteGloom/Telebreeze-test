function init() {
  const menu = document.getElementById('menu');
  const closeButton = menu.getElementsByClassName('menu__close-button')[0];
  function hideMenu() {
    menu.classList.remove('menu_state_open');
    menu.classList.add('menu_state_hidden');
  }

  closeButton.addEventListener('click', hideMenu);

  setTimeout(() => {
    menu.classList.remove('menu_state_hidden');
    menu.classList.add('menu_state_open');
  }, 1500);
};

document.addEventListener('DOMContentLoaded', init);