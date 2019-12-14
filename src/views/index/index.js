import Menu from '../../blocks/Menu/Menu';
import Chat from '../../blocks/Chat/Chat';
import Header from '../../blocks/Header/Header';
import StylesLoader from '../../scripts/StylesLoader';

function init() {
  const stylesLoader = new StylesLoader(window.navigator.userAgent);
  const menu = new Menu(false, document.getElementById('menu-open-button'));
  const chat = new Chat(false);
  const header = new Header(stylesLoader);
}

window.addEventListener('DOMContentLoaded', init);
