import MobileDetect from 'mobile-detect';

class StylesLoader {
  constructor(type) {
    this.mobileDetect = new MobileDetect(type);
    this._init();
  }

  setType(type) {
    this.mobileDetect = new MobileDetect(type);
    this._loadStyles();
  }

  _init() {
    this.stylesNormal = StylesLoader.makeStyleNode('./static/styles/stylesNormal.css');
    this.stylesMobile = StylesLoader.makeStyleNode('./static/styles/stylesMobile.css');
    this.stylesTablet = StylesLoader.makeStyleNode('./static/styles/stylesTablet.css');
    this._loadStyles();
  }

  _loadStyles() {
    this.stylesNormal.remove();
    this.stylesMobile.remove();
    this.stylesTablet.remove();

    if (!this.mobileDetect.phone() && !this.mobileDetect.tablet()) {
      console.log('This is a pc! Used agent: ', window.navigator.userAgent);
      document.head.appendChild(this.stylesNormal);
    }

    if (this.mobileDetect.phone()) {
      console.log('This is a phone! Used agent: ', window.navigator.userAgent);
      document.head.appendChild(this.stylesMobile);
    }

    if (this.mobileDetect.tablet()) {
      console.log('This is a tablet! Used agent: ', window.navigator.userAgent);
      document.head.appendChild(this.stylesTablet);
    }
  }

  static makeStyleNode(url) {
    const node = document.createElement('link');
    node.rel = 'stylesheet';
    node.type = 'text/css';
    node.href = url;

    return node;
  }
}

export default StylesLoader;
