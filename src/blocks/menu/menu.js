import SmoothScroll from '../../scripts/SmoothScroll';

class Menu {
  constructor(visibility = false, openButton) {
    this.openButton = openButton;
    this.visibility = visibility;

    this._init();
  }

  _applyVisibility() {
    this.menu.classList[this.visibility ? 'remove' : 'add']('menu_state_hidden');
    this.menu.classList[this.visibility ? 'add' : 'remove']('menu_state_open');
  }

  _toggleVisibility() {
    this.visibility = !this.visibility;
    this._applyVisibility();
  }

  _handleClick() {
    this._toggleVisibility();
  }

  _init() {
    [this.menu] = document.getElementsByClassName('menu');
    [this.body] = this.menu.getElementsByClassName('menu__body');
    [this.closeButton] = this.menu.getElementsByClassName('menu__close-button');
    const smoothScroll = new SmoothScroll(this.body);

    this._addListeners();
    this._applyVisibility();
  }

  _addListeners() {
    this.openButton.addEventListener('click', this._handleClick.bind(this));
    this.closeButton.addEventListener('click', this._handleClick.bind(this));
  }
}

export default Menu;
