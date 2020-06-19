const cards = document.querySelectorAll('.card')
const modal = document.querySelector('#moda-home')
const receitaShow = document.querySelector('#modal .receita')

for (let card of cards) {
    card.addEventListener('mouseover', () => {

        modal.classList.remove('hide')
        receitaShow.innerHTML += `${card.innerHTML}`
    })
}




// for (let card of cards) {
//     card.addEventListener('click', () => {

//         modal.classList.remove('hide')
//         receitaShow.innerHTML += `${card.innerHTML}`
//     })
// }

// document
//     .querySelector('#close')
//     .addEventListener('click', () => {
//         modal.classList.add('hide')
//         receitaShow.innerHTML = ''
//     })

