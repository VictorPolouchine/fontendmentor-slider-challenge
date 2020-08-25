const prevBtn = document.querySelector('.slider-previous');
const nextBtn = document.querySelector('.slider-next');

const slide1 = document.querySelector('#slide1');
const testimonial1 = document.querySelector('#testimonial1');
const slide2 = document.querySelector('#slide2');
const testimonial2 = document.querySelector('#testimonial2');

function sliderFunction() {
    if(slide1.classList.contains('active') || testimonial1.classList.contains('active')) {
        slide1.classList.remove('active');
        testimonial1.classList.remove('active');
        slide2.classList.add('active');
        testimonial2.classList.add('active');
    }
    else {
        slide1.classList.add('active');
        testimonial1.classList.add('active');
        slide2.classList.remove('active');
        testimonial2.classList.remove('active');
    }
}

prevBtn.addEventListener('click', () => {
    sliderFunction();
});


nextBtn.addEventListener('click', () => {
    sliderFunction();
});

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            sliderFunction();
            break;
        case 'ArrowRight':
            sliderFunction();
    }
};