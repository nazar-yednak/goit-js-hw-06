const itemRef = document.querySelector('#categories')
console.log(`Number of categories: ${itemRef.children.length}`);

itemRef.querySelectorAll('.item h2').
    forEach(element =>
console.log(`Category: ${element.textContent}
Elements: ${element.nextElementSibling.children.length}`))
