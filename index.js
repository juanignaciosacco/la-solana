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
  setInterval(nextImage, 4000);
});



// Pagina eventos

const carouselEventos = document.querySelector('.carouselImgEventos');
const thumbnails = carouselEventos.querySelector('.thumbnailsEv');
const carouselImages = carouselEventos.querySelector('.carouselE').querySelectorAll('img');
const totalImagesEvent = carouselImages.length;
let currentIndexEventos = 0;

thumbnails.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const thumbnailIndex = Array.from(thumbnails.children).indexOf(event.target);
    showImageEventos(thumbnailIndex);
  }
});

function showImageEventos(index) {
  carouselImages.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function nextImageEventos() {
  currentIndexEventos = (currentIndexEventos + 1) % totalImagesEvent;
  showImageEventos(currentIndexEventos);
}

setInterval(nextImageEventos, 3000);

showImageEventos(currentIndexEventos);

