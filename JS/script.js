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

const artworks = [
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

artworks.forEach((artwork) => {
  const artworkHTML = `
    <div class="Contemporary">
    <img src="${artwork.image}" alt="Contemporary-image" class="Contemporary-image">
    <h2 class="contemporary-heading">${artwork.name}</h2>
    <p class="contemporary-paragraph">${artwork.descr}</p>
    </div>
    `;
  cardContainer.innerHTML += artworkHTML;
});

const discovers = [
  {
    image: './images/richard.jpg',
    name: 'Richard',
    joined: 'Joined Artfinder: June 2018',
    sale: 'Artworks for sale: 7',
    location: 'United Kingdom',
  },
  {
    image: './images/Shveta Saxena.jpeg',
    name: 'Shveta Saxa',
    joined: 'Joined Artfinder: June 2018',
    sale: 'Artworks for sale: 7',
    location: 'United Kingdom',
  },
  {
    image: './images/download.jpg',
    name: 'Cesare Vignato',
    joined: 'Joined Artfinder: April 2015',
    sale: 'Artworks for sale: 6',
    location: 'Italy',
  },
  {
    image: './images/Elenabondarenko.jpg',
    name: 'Elena Bondarenko',
    joined: 'Joined Artfinder: February 2017',
    sale: 'Artworks for sale: 42',
    location: 'Russian Federation',
  },
  {
    image: './images/Suzanne+Winn+WebRes+HS+Blue+striped-17.jpg',
    name: 'Suzanne Winn',
    joined: 'Joined Artfinder: June 2018',
    sale: 'Artworks for sale: 7',
    location: 'United Kingdom',
  },
  {
    image: './images/WhatsApp Image 2022-05-24 at 3.40.28 PM.jpeg',
    name: 'Manzi Tresor',
    joined: 'Joined Artfinder: June 2018',
    sale: 'Artworks for sale: 7',
    location: 'United Kingdom',
  },

];

const discoverContainer = document.querySelector('.discover-card-container');

discovers.forEach((discover) => {
  const discoverHtml = `
   <div class="discover-card-one">
   <div class="image-border"></div>
   <img src="${discover.image}" alt="" class="discover-img">
   <ul class="discover-listing">
   <li class="discover-name">${discover.name}</li>
    <li><hr class="discover-line"></li>
    <li>${discover.joined}</li>
    <li>${discover.sale}</li>
    <li>${discover.location}</li>
   </ul>
   </div>
   `;
  discoverContainer.innerHTML += discoverHtml;
});