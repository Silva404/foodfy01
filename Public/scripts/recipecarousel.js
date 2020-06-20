const track = document.querySelector('.carousel_track')
const slides = Array.from(track.children)

const nextBtn = document.querySelector('.carousel_button--right')
const prevBtn = document.querySelector('.carousel_button--left')


// arranjando as fotos
const slidesWidth = slides[0].getBoundingClientRect().width

const setSlidePosition = (slide, index) => {
    slide.style.left = slidesWidth * index + 'px'
}

slides.forEach(setSlidePosition)


// move to right
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')

    
})