import Menu from '../../blocks/Menu/Menu';

function init() {
  const menu = new Menu(false, document.getElementById('menu-open-button'));
}

document.addEventListener('DOMContentLoaded', init);