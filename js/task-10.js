function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainBox = document.querySelector('#boxes')
const inputEl = document.querySelector('input')
const btnCreate = document.querySelector('[ data-create]')
const btnDestroy = document.querySelector('[data-destroy]')

btnCreate.addEventListener('click', addBoxes)
btnDestroy.addEventListener('click', destroyBoxes)

function addBoxes() {  
  
  const amount = inputEl.value;
  createBoxes(amount)
}

function createBoxes(amount) {
  const startWidthDiv = 30;
 for (let i = 0; i < amount; i += 1) {
   const divEl = document.createElement('div');
  divEl.style.width = `${startWidthDiv + i * 10}px`;
  divEl.style.height = `${startWidthDiv + i * 10}px`;
  divEl.style.backgroundColor = getRandomHexColor()
mainBox.append(divEl)
   
 }
 
}
function destroyBoxes() {
  mainBox.innerHTML = '';  
}
