const track = document.querySelector('.carousel_track')

// pegando cada elemento e botando num array
const slides = Array.from(track.children)

const nextBtn = document.querySelector('.carousel_button--right')
const prevBtn = document.querySelector('.carousel_track--left')
const dotsNav = document.querySelector('.carousel_nav')
const dots = Array.from(dotsNav.children)

// pegando o valor da largura que ta dinamica
const slideWidth = slides[0].getBoundingClientRect().width


// arrange the slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)


// when i click left, move slidesto the left
// when i click right, move slides to the right
// when i click indicators, move to the slide