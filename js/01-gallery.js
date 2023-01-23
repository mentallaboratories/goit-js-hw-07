import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
//1STEP Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const imageGalleryContainer = document.querySelector('.gallery');
const markup = createImageGalleryMarkup(galleryItems);

imageGalleryContainer.innerHTML = markup;

//console.log(createImageGalleryMarkup(galleryItems));

function createImageGalleryMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `
    }).join('')
};


//2STEP Реалізація делегування на div.gallery і отримання url великого зображення.

imageGalleryContainer.addEventListener('click', onImageClick);

function onImageClick(e){ 
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')){
        return;
    }

    
    const image = e.target;
   // console.log(image.parentNode.href);
    const imageOriginalSrc = image.parentNode.href;

    

    //document.addEventListener('keydown', onEscKeyPress);









    const instance = basicLightbox.create(
        
        `
 		<img width="1280" height="855" src="${imageOriginalSrc}">
        	`, {
                onShow: (instance) => {document.addEventListener('keydown', onEscKeyPress)},
                onClose: (instance) => {document.removeEventListener('keydown', onEscKeyPress)},
            })
            instance.show()
       
    function onEscKeyPress(e){
        if(!instance.visible){
            return
        }
        instance.close(()=>{
            console.log('close')
        //document.removeEventListener('keydown', onEscKeyPress) 
        
    })
        
    }
        
}

//ESC 











