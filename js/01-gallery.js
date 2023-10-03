import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item, index) => {

  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');


  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;


  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;

 
  link.appendChild(image);
  galleryItem.appendChild(link);

 
  gallery.appendChild(galleryItem);

  let lightboxInstance = null; 


  link.addEventListener('click', (event) => {
    event.preventDefault();

    if (lightboxInstance) {
      lightboxInstance.close(); 
    }

    
    lightboxInstance = basicLightbox.create(`
      <img width="800" height="600" src="${item.original}">
    `);

    lightboxInstance.show();


    window.addEventListener('keydown', onEscapeKeyPress);
  });

  
  function onEscapeKeyPress(event) {
    if (event.code === 'Escape' && lightboxInstance) {
      lightboxInstance.close();
      window.removeEventListener('keydown', onEscapeKeyPress); 
    }
  }
});


console.log(galleryItems);