import Menu from '../../blocks/Menu/Menu';
import Chat from '../../blocks/Chat/Chat';

function init() {
  const menu = new Menu(false, document.getElementById('menu-open-button'));
  const chat = new Chat(false);
}

document.addEventListener('DOMContentLoaded', init);