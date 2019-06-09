// Wyświetlanie zdjęć z katalogu images - tablice, pętle
import image1 from '/images/img1.jpg';
import image2 from '/images/img2.jpg';
import image3 from '/images/img3.jpg';
import image4 from '/images/img4.jpg';
import image5 from '/images/img5.jpg';
import { Image } from './image.js';

const imagesPaths = [image1, image2, image3, image4, image5];

const images = imagesPaths.map(path => new Image(path));
images.forEach(image => image.showImage());

const btnShowFavorite = document.getElementById('showFavourites');
btnShowFavorite.addEventListener('click', () => {
  images.filter(image => !image.showFavorite()).forEach(image => image.hide());
});

const btnShowAll = document.getElementById('showAll');
btnShowAll.addEventListener('click', () => {
  images.forEach(image => image.show());
});
