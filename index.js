// Write your code below:
const heading = document.createElement('h3');
const headingText = document.createTextNode('Buy high quality organic fruits online');
heading.appendChild(headingText);
heading.style.fontStyle = 'italic';

const divs = document.getElementById('header');
divs.appendChild(heading);

const totalTag = document.createElement('p');
const totalText = document.createTextNode('Total fruits: 4');
totalTag.appendChild(totalText);

const divcount = document.getElementsByTagName('div');
const seconddiv = divcount[1];

const ul = document.querySelector('.fruits');
seconddiv.insertBefore(totalTag, ul);

totalTag.id = 'fruits-total';
