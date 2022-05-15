
const decBtn = document.querySelector('[data-action="decrement"]')
const incBtn = document.querySelector('[data-action="increment"]')
const counter = document.getElementById('value')

function getCouter() {
  let count = 0
  function dec() {
    return (count -= 1)
  }
  function inc() {
    return (count += 1)
  }

  return { dec, inc }
}
const counterValue = getCouter()

decBtn.addEventListener('click', () => {
  let result = counterValue.dec()
  counter.textContent = result
})

incBtn.addEventListener('click', () => {
  let result = counterValue.inc()
  counter.textContent = result

})