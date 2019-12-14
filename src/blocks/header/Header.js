class Header {
  constructor(styleLoader) {
    this.styleLoader = styleLoader;

    this._init();
  }

  _handleButtonClick(event) {
    if (event.target === this.pcButton) {
      this.styleLoader.setType('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0');
    }

    if (event.target === this.phoneButton) {
      this.styleLoader.setType('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
    }

    if (event.target === this.tabletButton) {
      this.styleLoader.setType('Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1');
    }
  }

  _addListeners() {
    this.pcButton.addEventListener('click', this._handleButtonClick.bind(this));
    this.phoneButton.addEventListener('click', this._handleButtonClick.bind(this));
    this.tabletButton.addEventListener('click', this._handleButtonClick.bind(this));
  }

  _init() {
    [this.header] = document.getElementsByClassName('header');
    [this.pcButton] = this.header.getElementsByClassName('header__button_type_pc');
    [this.phoneButton] = this.header.getElementsByClassName('header__button_type_phone');
    [this.tabletButton] = this.header.getElementsByClassName('header__button_type_tablet');

    this._addListeners();
  }
}

export default Header;
