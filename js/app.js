// Wyświetlanie zdjęć z katalogu images - tablice, pętle
import image1 from '/images/img1.jpg';
import image2 from '/images/img2.jpg';
import image3 from '/images/img3.jpg';
import image4 from '/images/img4.jpg';
import image5 from '/images/img5.jpg';

const imagesPaths = [image1, image2, image3, image4, image5];

class Image {
  constructor(path) {
    this.path = path;
  }

  showImage() {
    const gallery = document.getElementById('images');

    let image = document.createElement('img');
    image.setAttribute('src', this.path);
    image.className = 'images__image';
    gallery.appendChild(image);

    image.addEventListener('click', () => {
      this.addFavorite();
    });

    this.image = image;
  }
  addFavorite() {
    this.image.classList.toggle('image--favourite');
  }
}

imagesPaths.forEach(path => {
  const image = new Image(path);
  image.showImage();
});
