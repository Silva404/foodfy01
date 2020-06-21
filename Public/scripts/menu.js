let show = true

const menu = document.querySelector('.menu-section')
const header = document.querySelector('header')
const content = document.querySelector('.content')


menu.addEventListener('click', e => {
    document.body.style.overflow = show ? 'hidden' : 'initial'

    menu.classList.toggle('on', show)
    show = !show  


    header.classList.toggle('on')     
    content.classList.toggle('on')
})