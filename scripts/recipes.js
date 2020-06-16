const cards = document.querySelectorAll('.card')
const modal = document.querySelector('#modal')

for (let card of cards) {
    card.addEventListener('click', () => {
        modal.classList.remove('hide')
    })
}

document
    .querySelector('.show p')
    .addEventListener('click', () => {
        modal.classList.add('hide')
    })