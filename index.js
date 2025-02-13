const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';
const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px'
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

//QuerySelectorAll
const fruitItems = document.querySelectorAll('.fruit');

for (let i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';
}

const oddFruitsItems = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < oddFruitsItems.length; i++){
    oddFruitsItems[i].style.background = 'lightgrey';
}
// Write answer to the questions asked below:

const basketHeading1 = document.querySelector('#basket-heading');
basketHeading1.style.color = 'brown';

const evenFruitsItems = document.querySelectorAll('.fruit:nth-child(even)');

for (let i = 0; i < evenFruitsItems.length; i++) {
    evenFruitsItems[i].style.background = 'brown';
    evenFruitsItems[i].style.color = 'white';
}