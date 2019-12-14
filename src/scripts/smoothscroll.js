class Smoothscroll {
  constructor(element) {
    this.element = element;
    this.isScrolling = false;

    this._init();
  }

  _animateScroll(value, duration) {
    function animate(from, to, callback, finalCallback) {
      const start = performance.now();
      const timer = setInterval(tick, 16);

      function tick() {
        const now = performance.now();
        let progress = (now - start) / duration;

        if (progress > 1) progress = 1;
        callback(from + (to - from) * progress);

        if (progress === 1) {
          clearInterval(timer);
          finalCallback();
        }
      }
    }

    this.isScrolling = true;
    const currentScroll = this.element.scrollTop;
    let necessaryScroll = currentScroll + value;
    if (necessaryScroll < 0) necessaryScroll = 0;

    animate(currentScroll, necessaryScroll, (scroll) => {
      this.element.scrollTop = scroll;
    }, () => {
      this.isScrolling = false;
    });
  }

  _handleScroll(event) {
    event.preventDefault();
    if (this.isScrolling) return;

    if (event.deltaY < 0) {
      this._animateScroll(-400, 500);
    }
    if (event.deltaY > 0) {
      this._animateScroll(400, 500);
    }
  }

  _handleTouchstart(eventStart) {
    const startPosition = eventStart.touches[0].screenY;
    let lastMovePosition = startPosition;

    function handleTouchmove(eventMove) {
      eventMove.preventDefault();
      lastMovePosition = eventMove.touches[0].screenY;
    }

    function handleTouchend() {
      this.element.removeEventListener('touchmove', handleTouchmove);
      const distance = startPosition - lastMovePosition;
      if (distance > 50 || distance < -50) {
        if (this.isScrolling) return;

        if (distance < 0) {
          this._animateScroll(-400, 500);
        }
        if (distance > 0) {
          this._animateScroll(400, 500);
        }
      }
    }

    this.element.addEventListener('touchmove', handleTouchmove.bind(this));
    this.element.addEventListener('touchend', handleTouchend.bind(this), { once: true });
  }

  _init() {
    this._addListeners();
  }

  _addListeners() {
    this.element.addEventListener('wheel', this._handleScroll.bind(this));
    this.element.addEventListener('touchstart', this._handleTouchstart.bind(this));
  }
}

export default Smoothscroll;
