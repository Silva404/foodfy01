const cards = document.querySelectorAll('.card')

const author = document.querySelector('.card-text')
const description = document.querySelector('.card-text-n')
const shadow = document.querySelector('.card.shadow')


// CONSERTAR E FAZER UM LOOP QUE APAREÇA A INFO APENAS EM UMA DAS RECEITAS

for (let card of cards) {
    card.addEventListener('mouseover', () => {

        description.classList.remove('hide')
        author.classList.add('hide')
        shadow.classList.add('shadow')
    })
}

for (let card of cards) {
    card.addEventListener('mouseout', () => {

        author.classList.remove('hide')
        shadow.classList.remove('shadow')
        description.classList.add('hide')
    })
}


for (let card of cards) {
    card.addEventListener('click', () => {
        const recipeId = card.getAttribute('id')

        window.location.href = `/your-recipe/${recipeId}`
    })
}


