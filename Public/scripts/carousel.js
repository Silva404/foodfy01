// const track = document.querySelector('.carousel_track')

// // pegando cada elemento e botando num array
// const slides = Array.from(track.children)

// const nextBtn = document.querySelector('.carousel_button--right')
// const prevBtn = document.querySelector('.carousel_button--left')
// const dotsNav = document.querySelector('.carousel_nav')
// const dots = Array.from(dotsNav.children)

// // pegando o valor da largura que ta dinamica
// const slideWidth = slides[0].getBoundingClientRect().width


// // arrange the slides next to each other
// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px'
// }

// slides.forEach(setSlidePosition)


// const moveToSLide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
//     currentSlide.classList.remove('current-slide')
//     targetSlide.classList.add('current-slide')
// }

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide')
//     targetDot.classList.add('current-slide')
// }

// // when i click left, move slidesto the left
// prevBtn.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide')
//     const prevSlide = currentSlide.previousElementSibling

//     const currentDot = dotsNav.querySelector('.current-slide')
//     const prevDot = currentDot.previousElementSibling

//     updateDots(currentDot, prevDot)
//     moveToSLide(track, currentSlide, prevSlide)
// })


// // when i click right, move slides to the right
// nextBtn.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide')
//     const nextSlide = currentSlide.nextElementSibling
//     const currentDot = dotsNav.querySelector('.current-slide')
//     const nextDot = currentDot.nextElementSibling

//     moveToSLide(track, currentSlide, nextSlide)
//     updateDots(currentDot, nextDot)
// })


// // when i click indicators, move to the slide
// dotsNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('button');

//     const currentSlide = track.querySelector('.current-slide')
//     const currentDot = dotsNav.querySelector('.current-slide')

//     const targetIndex = dots.findIndex(dot => dot === targetDot)
//     const targetSlide = slides[targetIndex]
//     console.log(targetSlide)

//     moveToSLide(track, currentSlide, targetSlide)
//     updateDots(currentDot, targetDot)
// })

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



// mover com cliques
nextBtn.addEventListener('click', () => {
    
})