
const validInput = document.getElementById('validation-input')


const inputLengthString = validInput.dataset.length
const inputLengthNumber = Number(inputLengthString)

validInput.addEventListener('blur', (elem) => {
    if (elem.target.value.length === inputLengthNumber) {
        validInput.className = 'valid'
    }
    else validInput.className = 'invalid'
})
дОробити