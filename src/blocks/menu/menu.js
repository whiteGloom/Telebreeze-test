(function() {
  setTimeout(() => {
    document.getElementsByClassName('menu')[0].classList.remove('menu_state_hidden');
    document.getElementsByClassName('menu')[0].classList.add('menu_state_open');
  }, 1500);
}());