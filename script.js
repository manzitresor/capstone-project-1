const menuButton = document.getElementById('menu-button');
const menuList = document.querySelector('.menu-list');
const closeBtn = document.querySelector('.close-btn');

menuButton.addEventListener('click', (event) => {
  event.preventDefault();
  menuList.style.display = 'block';
  menuButton.style.display = 'none';
});

closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  menuList.style.display = 'none';
  menuButton.style.display = 'block';
});