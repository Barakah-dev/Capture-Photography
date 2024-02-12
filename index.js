const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

menuOpen.addEventListener('click', () => {
  navbar.classList.toggle('active');
  //   navbar.classList.add('active');
})

body.addEventListener('click', e => {
  let clickedEl = e.target;

  if (!clickedEl.classList.contains('menu-open') || clickedEl.classList.contains('menu-close')) {
    navbar.classList.remove('active');
  }  
});
