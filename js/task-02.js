const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector("#ingredients")

const elements = ingredients.map(value => {
    const element = document.createElement('li');
    element.textContent = value;
    return element    
})

ulList.append(...elements)

































