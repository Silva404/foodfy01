const cards = document.querySelectorAll('.card')
const modal = document.querySelector('#modal')
const receitaShow = document.querySelector('#modal .receita')

for (let card of cards) {    
    card.addEventListener('click', () => {

        modal.classList.remove('hide')
        receitaShow.innerHTML += `${card.innerHTML}`
    })
}



// quando eu clicar no card of cards


// tenho que pegar sua image

// tittle h4
// pegar o text do event.target e colocar no meu h4 e p inner html
// subtitle p

// apagar o conteudo quando clicar em fechar o modal

document
    .querySelector('#close')
    .addEventListener('click', () => {
        modal.classList.add('hide')
        receitaShow.innerHTML = ''
    })