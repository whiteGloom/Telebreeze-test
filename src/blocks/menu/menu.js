class Menu {
  constructor(visibility = false, openButton) {
    this.menu = document.getElementsByClassName('menu')[0];
    this.closeButton = this.menu.getElementsByClassName('menu__close-button')[0];
    this.openButton = openButton;
    this.visibility = visibility;

    this._addListeners();
  }

  _toggleVisibility() {
    this.visibility = !this.visibility;
    this._applyVisibility();
  }

  _applyVisibility(visibility) {
    this.menu.classList[this.visibility ? 'remove' : 'add']('menu_state_hidden');
    this.menu.classList[this.visibility ? 'add' : 'remove']('menu_state_open');
  }

  _addListeners() {
    this.openButton.addEventListener('click', this._toggleVisibility.bind(this));
    this.closeButton.addEventListener('click', this._toggleVisibility.bind(this));
  }
}

export default Menu;
