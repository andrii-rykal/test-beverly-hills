'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('Page--with-menu');
  } else {
    document.body.classList.remove('Page--with-menu');
  }
});

const form = document.querySelector('.Question__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
