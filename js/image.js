export class Image {
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
