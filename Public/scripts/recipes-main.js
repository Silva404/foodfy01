const cards = document.querySelectorAll('.card')

const autor = document.querySelector('.card-text')
const descricao = document.querySelector('.card-text-n')
const shadow = document.querySelector('.card.shadow')


// CONSERTAR E FAZER UM LOOP QUE APAREÇA A INFO APENAS EM UMA DAS RECEITAS

for (let card of cards) {
    card.addEventListener('mouseover', () => {

        descricao.classList.remove('hide')
        autor.classList.add('hide')
        shadow.classList.add('shadow')
        // receitaShow.innerHTML += `${card.innerHTML}`
    })
}

for (let card of cards) {
    card.addEventListener('mouseout', () => {

        autor.classList.remove('hide')
        shadow.classList.remove('shadow')
        descricao.classList.add('hide')
        // receitaShow.innerHTML += `${card.innerHTML}`
    })
}


