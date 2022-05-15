
const validInput = document.querySelector('#font-size-control')

const text = document.querySelector('#text')
text.style.fontSize = '50px'

validInput.addEventListener('input', (e) => {
   text.style.fontSize = `${e.target.value}px`

})