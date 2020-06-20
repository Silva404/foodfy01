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


const sliderMove = (amount, currentSlide, nextSlide) => {
    track.style.transform = 'translateX(-' + amount + ')'
    currentSlide.classList.remove('current-slide')
    nextSlide.classList.add('current-slide')
}



// move left
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
    const amountToMove = prevSlide.style.left

    //move to the next slide
    sliderMove(amountToMove, currentSlide, prevSlide)
})

// move to right
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    const amountToMove = nextSlide.style.left

    //move to the next slide
    sliderMove(amountToMove, currentSlide, nextSlide)
})