const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  links.style.display = open ? 'flex' : '';
  links.style.position = 'absolute';
  links.style.top = '70px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.padding = '22px 20px';
  links.style.background = '#f3f0e8';
  links.style.margin = '0';
  links.style.zIndex = '5';
});
