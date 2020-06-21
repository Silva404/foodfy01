const track = document.querySelector('.carousel_track')
const slides = Array.from(track.children)

const nextBtn = document.querySelector('.carousel_button--right')
const prevBtn = document.querySelector('.carousel_button--left')


// arrange the slides
const slideWidth = slides[0].getBoundingClientRect().width

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

const moveSlide = (currentSlide, newSlide, amount) => {
    track.style.transform = 'translateX(-' + amount + ')'
    currentSlide.classList.remove('current-slide')
    newSlide.classList.add('current-slide')
}



// mover com cliques
prevBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
    const amountToMove = prevSlide.style.left

    moveSlide(currentSlide, prevSlide, amountToMove)

})

nextBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    const amountToMove = nextSlide.style.left

    moveSlide(currentSlide, nextSlide, amountToMove)
})