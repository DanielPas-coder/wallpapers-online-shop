const carouselImages = [
    'img/mars-carousel.png',
    'img/poster-carousel.png',
    'img/logo-carousel.png',
    'img/train.png'
]

let currentIdx = 0;

function showCurrentImage() {
    const imgContainer1 = document.querySelector('.products-carousel .image1');
    const imgContainer2 = document.querySelector('.products-carousel .image2');
    const imgContainer3 = document.querySelector('.products-carousel .image3');
    const img2Idx = currentIdx + 1 > carouselImages.length - 1 ? 0 : currentIdx + 1;      
    const img3Idx = img2Idx + 1 > carouselImages.length - 1 ? 0 : img2Idx + 1;      
    imgContainer1.src =  carouselImages[currentIdx]; 
    imgContainer2.src =  carouselImages[img2Idx]; 
    imgContainer3.src =  carouselImages[img3Idx]; 
}

showCurrentImage();

setInterval(next, 2500);