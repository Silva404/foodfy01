const cards = document.querySelectorAll('.card')
const modal = document.querySelector('#modal')
const receitaShow = document.querySelector('#modal .receita')

//a imagem especifica de cada card
const cardImg = document.querySelectorAll('.card img')

// for (let img of cardImg) {    
//     img.addEventListener('click', () => {
//         modal.classList.remove('hide')
//         receitaShow.innerHTML += `<img src='${img.src}'></img>`
//     })
// }


for (let card of cards) {    
    card.addEventListener('click', () => {
        console.log(card.getElementsByClassName('.teste').innerHTML)

        modal.classList.remove('hide')
        receitaShow.innerHTML += `<h4>${card.innerHTML}</h4> 
        <p>${card.getElementsByClassName('.teste').innerHTML}</p>`
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