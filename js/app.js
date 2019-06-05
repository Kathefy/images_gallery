// Wyświetlanie zdjęć z katalogu images - tablice, pętle
import image1 from '/images/img1.jpg';
import image2 from '/images/img2.jpg';
import image3 from '/images/img3.jpg';
import image4 from '/images/img4.jpg';
import image5 from '/images/img5.jpg';

const imagesPaths = [image1, image2, image3, image4, image5];

const gallery = document.getElementById('images');

imagesPaths.forEach(path => {
  let image = document.createElement('img');
  image.setAttribute('src', path);
  image.className = 'images__image';

  gallery.appendChild(image);

  //Dodawanie zdjęcia do ulubionych
  image.addEventListener('click', e => {
    e.target.classList.toggle('image--favourite');
  });
});
