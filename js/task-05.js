
const inputValue = document.getElementById('name-input')
const outputValue = document.getElementById('name-output')

const textDefault = outputValue.textContent

inputValue.addEventListener('input', (name) => {
  if (!(name.target.value === '')) {
      outputValue.textContent = name.target.value
     } else outputValue.textContent = textDefault
 })