// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);
const galleryItemsMarkup = galleryItems.map(({ original, preview, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"/>
    </a>
    `
  }).join("");

     const galleryRef = document.querySelector(".gallery");
  
  galleryRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

  var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
