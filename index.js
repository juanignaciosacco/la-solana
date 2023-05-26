const carousels = document.querySelectorAll('.carouselImg');

carousels.forEach((carousel) => {
  const images = carousel.querySelectorAll('img');
  const totalImages = images.length;
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  // Mostrar la primera imagen
  showImage(currentIndex);

  // Cambiar a la siguiente imagen cada 2 segundos (2000 milisegundos)
  setInterval(nextImage, 3000);
});

// Pagin eventos

const carouselEventos = document.querySelector('.carouselImgEventos');
const imagesEvent = carouselEventos.querySelectorAll('img');
const totalImagesEvent = imagesEvent.length;
let currentIndexEventos = 0;

function showImageEventos(index) {
  imagesEvent.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImageEventos() {
  currentIndexEventos = (currentIndexEventos + 1) % totalImagesEvent;
  showImageEventos(currentIndexEventos);
}

setInterval(nextImageEventos, 3000); // Cambia la imagen cada 2 segundos (2000 milisegundos)

showImageEventos(currentIndexEventos);
