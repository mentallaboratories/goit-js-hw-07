import { galleryItems } from './gallery-items.js';
// Change code below this line


//1STEP Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const imageGalleryContainer = document.querySelector('.gallery');
const markup = createImageGalleryMarkup(galleryItems);

imageGalleryContainer.innerHTML = markup;

//console.log(createImageGalleryMarkup(galleryItems));

function createImageGalleryMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `
         <div class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
            />
            </a>
        </div>
         `
    }).join('')
};

imageGalleryContainer.addEventListener('click', onImageClick);

function onImageClick(e){ 
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')){
        return;
    }
    


    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
        
    });
}