class Chat {
  constructor(state = false) {
    this.state = state;

    this._init();
  }

  _applyElementVisibility(element) {
    element.classList.add(`${element.classList[0]}_state_${this.state ? 'open' : 'closed'}`);
    element.classList.remove(`${element.classList[0]}_state_${this.state ? 'closed' : 'open'}`);
  }

  _applyVisibility() {
    this._applyElementVisibility(this.controlButton);
    this._applyElementVisibility(this.body);
  }

  _toggleVisibility() {
    this.state = !this.state;
    this._applyVisibility();
  }

  _handleClick() {
    this._toggleVisibility();
  }

  _init() {
    [this.chat] = document.getElementsByClassName('chat');
    [this.controlButton] = this.chat.getElementsByClassName('chat__control-button');
    [this.body] = this.chat.getElementsByClassName('chat__body');

    this._addListeners();
    this._applyVisibility();
  }

  _addListeners() {
    this.controlButton.addEventListener('click', this._handleClick.bind(this));
  }
}

export default Chat;
