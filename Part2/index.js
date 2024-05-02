console.log("Tic Tac Toe algorithms suck")
const cardID = document.querySelector('#card-id')
const cardStyle = document.querySelector('#card-style')

function setCard() {
    const element = document.querySelector('#card-style').value
    const test = document.querySelector('#spades')
    const test2 = document.querySelector('#clubs')
    const test3 = document.querySelector('#hearts')
    const test4 = document.querySelector('#diamonds')
    test.style.color = 'black'
    test2.style.color = 'black'
    test3.style.color = 'red'
    test4.style.color = 'red'
    console.log(element)
}

const editCardButton = document.querySelector('#edit-card')
editCardButton.addEventListener('click', setCard())