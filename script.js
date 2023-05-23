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

const artwork = [
  {
    image: './images/pexels-steve-johnson-1266808.jpg',
    name: 'Contemprary art',
    descr: 'Spanning from 1970 to the present day.',
  },
  {
    image: './images/abstract-city-art-drawing-qukwbza93wri3pnf.jpg',
    name: 'Pop Art',
    descr: 'Spanning from 1970 to the present day.',
  },
  {
    image: './images/il_570xN.2967194173_n5h1.jpg',
    name: 'Post-War',
    descr: 'Spanning from 1970 to the present day.',
  },
  {
    image: './images/desktop-wallpaper-mother-and-baby-painting-at-paintingvalley-mother-and-baby-painting.jpg',
    name: 'Old Masters',
    descr: 'Spanning from 1970 to the present day.',
  },
  {
    image: './images/Screen-Shot-2019-12-20-at-16.08.24-1650x925.png',
    name: 'Design',
    descr: 'Spanning from 1970 to the present day.',
  },
];

const cardContainer = document.querySelector('.card-container');

artwork.forEach((project) => {
  const artworkHTML = `
    <div class="Contemporary">
    <img src="${project.image}" alt="Contemporary-image" class="Contemporary-image">
    <h2 class="contemporary-heading">${project.name}</h2>
    <p class="contemporary-paragraph">${project.descr}</p>
    </div>
    `;
  cardContainer.innerHTML += artworkHTML;
});