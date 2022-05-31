import './style.css';

const containerDiv = document.createElement('div');
const paragraph = document.createElement('p');
const button = document.createElement('button');
const wrapper = document.getElementById('wrapper');
paragraph.textContent = 'this is the';
button.textContent = 'add here';
containerDiv.appendChild(paragraph);
containerDiv.appendChild(button);
wrapper.appendChild(containerDiv);
